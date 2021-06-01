const fs = require('fs');
const path = require('path');

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//   if (err) throw new Error(err);
//   console.log('create');
// });

// fs.writeFile(
//   path.join(__dirname, 'notes', 'myNote.txt'),
//   'Hello world',
//   (err) => {
//     if (err) throw err;
//     console.log('create');

//     fs.appendFile(
//       path.join(__dirname, 'notes', 'myNote.txt'),
//       'From append file',
//       (err) => {
//         if (err) throw err;
//         console.log('File changed');
//       }
//     );
//   }
// );

// fs.readFile(
//   path.join(__dirname, 'notes', 'myNote.txt'),
//   'utf-8',
//   (err, data) => {
//     if (err) throw err;
//     console.log(Buffer.from(data).toString());
//   }
// );

// fs.rename(
//   path.join(__dirname, 'notes', 'myNote.txt'),
//   path.join(__dirname, 'notes', 'notes.txt'),
//   (err) => {
//     if (err) throw err;
//     console.log('renamed');
//   }
// );
