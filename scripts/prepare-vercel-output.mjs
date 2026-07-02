import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputRoot = join(process.cwd(), '.vercel', 'output');
const staticRoot = join(outputRoot, 'static');
const exportRoot = join(process.cwd(), 'out');

if (!existsSync(exportRoot)) {
  throw new Error('Missing out/. Run npm run build before preparing Vercel output.');
}

rmSync(outputRoot, { recursive: true, force: true });
mkdirSync(staticRoot, { recursive: true });
cpSync(exportRoot, staticRoot, { recursive: true });
writeFileSync(
  join(outputRoot, 'config.json'),
  `${JSON.stringify({ version: 3, routes: [{ handle: 'filesystem' }] }, null, 2)}\n`,
);

console.log('Prepared .vercel/output from Next static export in out/.');
