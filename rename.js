var fs = require('fs');

fs.rename('apend.js', 'append.js', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 

fs.rename('apend2.js', 'append2.js', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 