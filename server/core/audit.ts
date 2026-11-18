import { dbAdmin } from './firebaseAdmin';
import { sanitizeLogData } from './logger';

export interface AuditLogEntry {
  actorUid?: string;
  actorRole?: string;
  action: string;
  targetId?: string;
  targetType?: string;
  before?: Record<string, unknown> | null;
  after?: Record<string, unknown> | null;
  metadata?: Record<string, unknown> | null;
  ipAddress?: string;
  timestamp?: string;
}

export async function logAuditEvent(entry: AuditLogEntry): Promise<string> {
  const timestamp = entry.timestamp || new Date().toISOString();
  const docRef = dbAdmin.collection('auditLog').doc();

  const payload = {
    id: docRef.id,
    actorUid: entry.actorUid || 'SYSTEM',
    actorRole: entry.actorRole || 'SYSTEM',
    action: entry.action,
    targetId: entry.targetId || null,
    targetType: entry.targetType || 'SYSTEM',
    before: sanitizeLogData(entry.before || null),
    after: sanitizeLogData(entry.after || null),
    metadata: sanitizeLogData(entry.metadata || null),
    ipAddress: entry.ipAddress || null,
    timestamp,
    createdAt: timestamp,
  };

  try {
    // Write to primary auditLog collection
    await docRef.set(payload);

    // Also mirror to audit_logs for legacy/rule compatibility
    await dbAdmin.collection('audit_logs').doc(docRef.id).set(payload).catch(() => {});
  } catch (err) {
    console.error('[AuditLog] Failed to persist audit record:', err);
  }

  return docRef.id;
}
