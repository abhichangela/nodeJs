let arr = [ 2,5,6,3,7,3,10,40,5];

arr.filter((item) => {
    console.log(item); 
})

/* Output
2
5
6
3
7
3
10
40
5 */

let result = arr.filter((item) => {
    return item > 5;
});
console.log(result); // [ 6, 7, 10, 40 ]

let result2 = arr.filter((item) => {
    return item % 5;
})
console.log(result2); // [ 2, 6, 3, 7, 3 ]

