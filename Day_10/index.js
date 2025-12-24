const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/hello.txt`;

/* To write file */
// fs.writeFileSync(filePath, "This is text file");

/* To read file */
// fs.readFile(filePath, (error, response) => {
//     console.log(response); //<Buffer 54 68 69 73 20 69 73 20 74 65 78 74 20 66 69 6c 65>
// });

// fs.readFile(filePath, 'utf8', (error, response) => {
//     console.log(response); // This is text file
// });

/* To update file */
// fs.appendFile(filePath, " and file name is hello.txt", (error) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("File is updated");
//     }
// })

/* To rename file */
// fs.rename(filePath, `${dirPath}/dummy.txt`, (error) => {
//     if(error) {
//         console.log(error);
//     } else {
//         console.log("File is renamed");
//     }
// });

/* To delete file */
fs.unlinkSync(`${dirPath}/dummy.txt`);


/* Interview question:
What is buffer?
It is allocation of memory in which file is stored */