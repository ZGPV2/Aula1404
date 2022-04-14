fs.rename('apend2.js', 'append2.js', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
}); 