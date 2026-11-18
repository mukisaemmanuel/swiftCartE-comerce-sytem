import dotenv from 'dotenv';
dotenv.config();

import { app } from './app';

const PORT = process.env.API_PORT || process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`[SwiftCart Backend] Server listening on http://localhost:${PORT}`);
  console.log(`[SwiftCart Backend] Health check: http://localhost:${PORT}/api/health`);
});
