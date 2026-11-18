import * as fs from 'fs';
import { execSync } from 'child_process';

const report = fs.readFileSync('docs/FIDELITY-REPORT.md', 'utf8');
const lines = report.split('\n');
const items: { route: string; role: string; size: string; diff: number; status: string; mockup: string }[] = [];

for (const line of lines) {
  const match = line.match(/^\| `([^`]+)` \| ([^|]+) \| ([^|]+) \| ([0-9.]+)% \| \*\*([^*]+)\*\* \| "([^"]*)" \| `([^`]+)`/);
  if (match) {
    items.push({
      route: match[1],
      role: match[2].trim(),
      size: match[3].trim(),
      diff: parseFloat(match[4]),
      status: match[5],
      mockup: match[7]
    });
  }
}

console.log('Total parsed rows:', items.length);

// Compare against git diff of docs/FIDELITY-REPORT.md
// Look at modified lines in docs/FIDELITY-REPORT.md
try {
  const gitDiff = execSync('git diff docs/FIDELITY-REPORT.md').toString('utf8');
  const diffLines = gitDiff.split('\n');
  const changedScreens: { name: string; oldDiff: number; newDiff: number; delta: number }[] = [];
  
  let oldLine = '';
  for (const line of diffLines) {
    if (line.startsWith('-| `')) {
      oldLine = line;
    } else if (line.startsWith('+| `') && oldLine) {
      const oldMatch = oldLine.match(/\| ([0-9.]+)% \|/);
      const newMatch = line.match(/\| ([0-9.]+)% \|/);
      const nameMatch = line.match(/`([^`]+)`/);
      if (oldMatch && newMatch && nameMatch) {
        const oldDiff = parseFloat(oldMatch[1]);
        const newDiff = parseFloat(newMatch[1]);
        const delta = Math.round((newDiff - oldDiff) * 10) / 10;
        if (Math.abs(delta) >= 0.5) {
          changedScreens.push({
            name: nameMatch[1],
            oldDiff,
            newDiff,
            delta
          });
        }
      }
      oldLine = '';
    }
  }

  console.log(`Screens with fidelity changes (|delta| >= 0.5%): ${changedScreens.length}`);
  const worsenedBy5 = changedScreens.filter(s => s.delta > 5);
  console.log(`Screens worsened by > 5%: ${worsenedBy5.length}`);
  if (worsenedBy5.length > 0) {
    console.log('Screens worsened by > 5%:', worsenedBy5);
  } else {
    console.log('No screens worsened by > 5%!');
  }
  
  // Show top deltas
  changedScreens.sort((a,b) => b.delta - a.delta);
  console.log('Top deltas:');
  console.log(changedScreens.slice(0, 10));
} catch (e) {
  console.error(e);
}
