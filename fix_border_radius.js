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
  { regex: /\brounded-2xl\b(?! md:)/g, replacement: 'rounded-lg md:rounded-2xl' },
  { regex: /\brounded-3xl\b(?! md:)/g, replacement: 'rounded-xl md:rounded-3xl' },
  { regex: /\brounded-\[2rem\]\b(?! md:)/g, replacement: 'rounded-xl md:rounded-[2rem]' },
  { regex: /\brounded-\[2\.5rem\]\b(?! md:)/g, replacement: 'rounded-xl md:rounded-[2.5rem]' },
  { regex: /\brounded-\[3rem\]\b(?! md:)/g, replacement: 'rounded-2xl md:rounded-[3rem]' },
  { regex: /\brounded-\[3\.5rem\]\b(?! md:)/g, replacement: 'rounded-2xl md:rounded-[3.5rem]' },
  { regex: /\brounded-\[4rem\]\b(?! md:)/g, replacement: 'rounded-2xl md:rounded-[4rem]' },
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
