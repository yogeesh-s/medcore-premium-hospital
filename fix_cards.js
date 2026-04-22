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
  // Decrease mobile border radius
  { regex: /\brounded-xl md:/g, replacement: 'rounded-lg md:' },
  { regex: /\brounded-2xl md:/g, replacement: 'rounded-xl md:' },
  
  // Increase mobile top/bottom padding slightly on cards
  { regex: /\bp-4 md:p-6\b/g, replacement: 'px-4 py-5 md:p-6' },
  { regex: /\bp-4 md:p-8\b/g, replacement: 'px-4 py-6 md:p-8' },
  { regex: /\bp-5 md:p-10\b/g, replacement: 'px-5 py-8 md:p-10' },
  { regex: /\bp-6 md:p-12\b/g, replacement: 'px-6 py-8 md:p-12' },
  { regex: /\bp-8 md:p-16\b/g, replacement: 'px-6 py-10 md:p-16' },
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
