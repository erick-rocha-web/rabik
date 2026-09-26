// Build de produção: define RABIK_MODE=production (sem depender da sintaxe do shell)
// e executa o mesmo build + verificação do dist. Falha se a configuração estiver incompleta.
import { spawnSync } from 'node:child_process';

const env = { ...process.env, RABIK_MODE: 'production' };
const run = (cmd, args) => {
  const r = spawnSync(cmd, args, { stdio: 'inherit', env, shell: process.platform === 'win32' });
  if (r.status !== 0) process.exit(r.status ?? 1);
};

run('npx', ['astro', 'build']);
run('node', ['scripts/verify-dist.mjs']);
