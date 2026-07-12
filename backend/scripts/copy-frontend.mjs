import { cpSync, existsSync, mkdirSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const frontendDist = join(__dirname, '../../frontend/dist');
const publicDir = join(__dirname, '../public');

if (!existsSync(frontendDist)) {
  console.error('Frontend build missing. Run: cd frontend && npm run build');
  process.exit(1);
}

rmSync(publicDir, { recursive: true, force: true });
mkdirSync(publicDir, { recursive: true });
cpSync(frontendDist, publicDir, { recursive: true });
console.log('Frontend copied to backend/public');
