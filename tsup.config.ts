// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['index.ts'], // or 'src/index.ts' if you're using src/
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['cjs', 'esm'], // Dual support
  outDir: 'dist',
});
