let a = 10;
let b = 20;

let waitData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30);
    }, 1000);
})

waitData.then((data) => {
    b = data;
    console.log(a+b);
})