const app = require('./app');

console.log(app); // { x: 10, y: 20, z: [Function: z] }
console.log(app.z(100,200)); // 300