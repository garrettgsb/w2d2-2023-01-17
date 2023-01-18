const fs = require('fs');

// Arrow function version
fs.readFile('./counter', { encoding: 'utf8' }, (error, contents) => {
  if (error) { return console.log('error:', error); }
  console.log('before:', contents);
  const incremented = Number(contents) + 1;
  fs.writeFile('./counter', String(incremented), (error) => {
    fs.readFile('./counter', { encoding: 'utf8' }, (error, contents) => {
      console.log('after:', contents);
    });
  });
});

// Function keyword version
// fs.readFile('./counter.txt', { encoding: 'utf8' }, function(error, contents) {
//   if (error) { return console.log('error:', error); }
//   console.log('contents:', contents);
// });
