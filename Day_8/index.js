const fs = require('fs');
const process_data = process.argv;

// console.log(process_data);

if(process_data[2] === 'add') {
    fs.writeFileSync( process_data[3], process_data[4]);
} else if (process_data[2] === 'remove') {
    fs.unlinkSync(process_data[3]);
} else {
    console.log("Error in input");
}

/* Here we will add & remove file using command line process.argv will give us 2 value in array with 
currect directory & current file so now if we pass any extra parameter then it will add into same array
with new index so let's try:

If we want to add new file with text then we will run following command:
node index.js add demo.txt 'Hello World!!!'
add -> command which we will check add/remove
demo.txt -> file name
'Hello World!!!' -> text inside file

Now if we want to remove file which we have created then run following command:
node index.js remove demo.txt

If there is any error then it will display 'Error in input' */