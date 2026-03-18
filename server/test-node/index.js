// server/test-node/index.js

// './' ka matlab hai isi folder mein file dhoondo
const math = require('./math.js');

console.log("Jod ka natija:", math.jodo(10, 5));
console.log("Ghatane ka natija:", math.ghatao(10, 5));
setTimeout((a, b) => console.log("Total:", a + b), 10000, 10, 20);