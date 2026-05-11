import { spawn } from 'node:child_process';
import path from 'node:path';

const projectRoot = process.cwd();
const nodeCommand = process.execPath;
const viteCliPath = path.join(projectRoot, 'node_modules', 'vite', 'bin', 'vite.js');
const sharedOptions = {
  cwd: process.cwd(),
  stdio: 'inherit',
};

const childProcesses = [
  spawn(nodeCommand, [path.join(projectRoot, 'server.js')], sharedOptions),
  spawn(nodeCommand, [viteCliPath, '--host'], {
    ...sharedOptions,
    cwd: projectRoot,
  }),
];

let isShuttingDown = false;

function shutdown(signal = 'SIGTERM') {
  if (isShuttingDown) {
    return;
  }

  isShuttingDown = true;

  for (const child of childProcesses) {
    if (!child.killed) {
      child.kill(signal);
    }
  }
}

for (const child of childProcesses) {
  child.on('exit', (code) => {
    if (isShuttingDown) {
      return;
    }

    shutdown();
    process.exit(code ?? 0);
  });
}

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.on(signal, () => {
    shutdown(signal);
    process.exit(0);
  });
}
