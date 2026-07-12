import { cpSync, existsSync, mkdirSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '../..');
const frontendDist = join(repoRoot, 'frontend/dist');
const publicDir = join(repoRoot, 'public');

if (!existsSync(frontendDist)) {
  console.error('Frontend build missing at:', frontendDist);
  console.error('Run: npm run vercel-build --prefix backend');
  process.exit(1);
}

rmSync(publicDir, { recursive: true, force: true });
mkdirSync(publicDir, { recursive: true });
cpSync(frontendDist, publicDir, { recursive: true });
console.log('Frontend copied to public/');
