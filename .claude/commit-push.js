#!/usr/bin/env node
// Auto-commit and push any uncommitted changes in the hijama project.
// Called by the Stop hook at the end of each Claude turn.
const { execSync } = require('child_process');

const cwd = 'C:\\PROJECTS\\hijama';

try {
  const status = execSync('git status --porcelain', { cwd }).toString().trim();
  if (!status) process.exit(0);

  execSync('git add -A', { cwd });

  const changed = status
    .split('\n')
    .map(l => l.trim().replace(/^\S+\s+/, ''))
    .slice(0, 4)
    .join(', ');
  const suffix = status.split('\n').length > 4 ? ' …' : '';
  const msg = `Auto-save: ${changed}${suffix}`;

  execSync(`git commit -m "${msg}"`, { cwd });
  execSync('git push', { cwd });

  process.stdout.write(JSON.stringify({
    systemMessage: `Committed and pushed: ${changed}${suffix}`
  }));
} catch (_) {
  // Silent — never block the Claude turn
}
