#!/usr/bin/env node
import fg from 'fast-glob';
import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function convertFile(file) {
  const out = file.replace(/\.png$/i, '.avif');
  const buffer = await fs.readFile(file);
  await sharp(buffer).avif({ quality: 60 }).toFile(out);
  console.log('Converted', file, '->', out);
}

async function updateReferences(files, dryRun = true) {
  const codeFiles = await fg(files, { dot: true });
  for (const f of codeFiles) {
    let content = await fs.readFile(f, 'utf8');
    const updated = content.replace(/(\.(?:png|PNG))/g, '.avif');
    if (updated !== content) {
      if (dryRun) {
        console.log('[DRY RUN] Would update:', f);
      } else {
        await fs.writeFile(f, updated, 'utf8');
        console.log('Updated references in', f);
      }
    }
  }
}

async function main() {
  const pngFiles = await fg(['public/**/*.png'], { dot: true });
  if (pngFiles.length === 0) {
    console.log('No PNG files found.');
    return;
  }

  console.log('Found', pngFiles.length, 'PNG files. Converting...');
  for (const file of pngFiles) {
    try {
      await convertFile(file);
    } catch (err) {
      console.error('Failed to convert', file, err.message);
    }
  }

  // Update references in source files (dry run by default)
  await updateReferences(['src/**/*.{js,jsx,ts,tsx,html}', 'public/**/*.{html,js}'], true);
  console.log('\nConversion complete. References were NOT updated (dry run).');
  console.log('Rerun script with --apply to update references in code files.');
}

const args = process.argv.slice(2);
if (args.includes('--apply')) {
  // Run and apply updates
  (async () => {
    try {
      await main();
      await updateReferences(['src/**/*.{js,jsx,ts,tsx,html}', 'public/**/*.{html,js}'], false);
      console.log('References updated.');
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  })();
} else {
  main().catch((err) => { console.error(err); process.exit(1); });
}
