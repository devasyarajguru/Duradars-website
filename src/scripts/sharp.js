
// const sharp = require('sharp');
// const fs = require('fs');
// const directory = 'src/assets/images';

// console.log(directory);
// fs.readdirSync(directory).forEach(file => {
//     sharp(`${directory}/${file}`)
//       .resize(200, 100) // width, height
//       .toFile(`${directory}/resized/${file.replace(/\.[^/.]+$/, '')}-small.webp` , (err , info) => {
//         if(err)
//         {
//             console.log("Error : ", err);
//         }
//         else{
//             console.log("Image optimized" , info)
//         }
//       });
//     });