/* In this we will learn default functions of node JS, there are many default functions are available 
but we will learn few functions here for more functions you can check node.js website you will get 
all default functions there */

const fs = require('fs');

fs.writeFileSync("test.txt","Hello World!");

/* fs.writeFileSync will create a new file with name test.txt & it will add containt with Hello World! */

console.log("-->", __dirname); //--> C:\nodeJs\Day_4
console.log("-->", __filename); //--> C:\nodeJs\Day_4\file.js

/* __dirname will return current directory name */