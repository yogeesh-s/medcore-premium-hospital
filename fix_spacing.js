const fs = require('fs');
const path = require('path');

const walk = (dir, done) => {
  let results = [];
  fs.readdir(dir, (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, (err, stat) => {
        if (stat && stat.isDirectory()) {
          walk(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

const replacements = [
  // Padding Y
  { regex: /\bpy-24\b/g, replacement: 'py-12 md:py-24' },
  { regex: /\bpy-20\b/g, replacement: 'py-10 md:py-20' },
  { regex: /\bpy-16\b/g, replacement: 'py-8 md:py-16' },
  { regex: /\bpy-12\b/g, replacement: 'py-6 md:py-12' },
  // Padding X
  { regex: /\bpx-8\b/g, replacement: 'px-4 md:px-8' },
  { regex: /\bpx-10\b/g, replacement: 'px-4 md:px-10' },
  { regex: /\bpx-12\b/g, replacement: 'px-4 md:px-12' },
  // Padding All
  { regex: /\bp-6\b/g, replacement: 'p-4 md:p-6' },
  { regex: /\bp-8\b/g, replacement: 'p-4 md:p-8' },
  { regex: /\bp-10\b/g, replacement: 'p-5 md:p-10' },
  { regex: /\bp-12\b/g, replacement: 'p-6 md:p-12' },
  { regex: /\bp-16\b/g, replacement: 'p-8 md:p-16' },
  // Gaps
  { regex: /\bgap-8\b/g, replacement: 'gap-4 md:gap-8' },
  { regex: /\bgap-10\b/g, replacement: 'gap-5 md:gap-10' },
  { regex: /\bgap-12\b/g, replacement: 'gap-6 md:gap-12' },
  { regex: /\bgap-16\b/g, replacement: 'gap-8 md:gap-16' },
  { regex: /\bgap-20\b/g, replacement: 'gap-10 md:gap-20' },
  // Margins
  { regex: /\bmb-10\b/g, replacement: 'mb-6 md:mb-10' },
  { regex: /\bmb-12\b/g, replacement: 'mb-6 md:mb-12' },
  { regex: /\bmb-16\b/g, replacement: 'mb-8 md:mb-16' },
  { regex: /\bmb-20\b/g, replacement: 'mb-10 md:mb-20' },
  { regex: /\bmb-24\b/g, replacement: 'mb-12 md:mb-24' },
];

walk('./src', (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;
    replacements.forEach(r => {
      content = content.replace(r.regex, r.replacement);
    });
    if (content !== original) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  });
});
