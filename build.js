#!/usr/bin/env node

import { build } from 'esbuild';

await build({
  entryPoints: ['server/index.ts'],
  bundle: true,
  platform: 'node',
  packages: 'external',
  format: 'esm',
  outdir: 'dist',
  minify: true,
  sourcemap: true,
});

console.log('Build completed successfully!');