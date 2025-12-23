const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname);
console.log(dirPath); // C:\nodeJs\Day_9

const fullPath = path.join(__dirname, "dummy");
console.log(fullPath); // C:\nodeJs\Day_9\dummy

for(let i=0; i<5; i++) {
    fs.writeFileSync(`${fullPath}/Hello${i+1}.txt`, "Hello world!!!!");
}

fs.readdir(fullPath, (error, files) => {
    console.log(files);
    files.forEach((response) => {
        console.log(response);
    })
});