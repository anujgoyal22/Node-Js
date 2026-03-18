const fs = require('fs'); // Node.js ka inbuilt tool bulaya

const content = "Customer Name: Anuj Goyal\nItem: LED TV Repair\nStatus: Fixed";

// File likhne ka command: (File ka naam, Kya likhna hai)
fs.writeFileSync('repair_job.txt', content);

console.log("Mubarak ho! 'repair_job.txt' aapke folder mein ban chuki hai.");