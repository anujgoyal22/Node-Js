const express = require('express');
const cors = require('cors');
const fs = require('fs'); // File system module
const app = express();
app.use(express.json()); // Ye line 'body-parser' ka kaam karti hai
app.use(cors());

// 1. Fast Route: Ye turant jawab dega
/*app.get( path, callback )*/
app.get('/fast', 
    (req, res) => {res.json({ message: "Main turant wapas aa gaya!" });
});
/* Purana Style (Normal Function) - Dono ka kaam bilkul SAME hai
app.get('/fast', function(req, res) {
    res.json({ message: "Main turant wapas aa gaya!" });
}); */
/*---------const multiply = function(a, b) {return a * b}----------------*/
/*---const multiply = (a, b) => a * b;*/
// 2. Event Loop Demo Route (Slow): 
app.get('/slow', (req, res) => {
    console.log("Slow request aayi...");
    
    // Ye setTimeout Event Loop ko block nahi karega
    //let timeoutId = setTimeout(callback, delay, [arg1], [arg2], ...);
  setTimeout(() => {
        res.json({ message: "Main 3 seconds baad aaya, bina server ko roke!" });
    }, 3000);//end setTimeout()

    console.log("Server ne request side mein rakh di, ab wo doosre kaam kar sakta hai.");
});/*setTimeout(
    () => { res.json({ message: "..." }); }, // 1. Ye poora CALLBACK hai
    3000                                     // 2. Ye DELAY hai
);*/
/*// Callback function jo 'msg' naam ka argument leta hai
const meraKaam = (msg) => {
    res.json({ message: msg });
};*/
/* Syntax: setTimeout(callback, delay, arg1)
setTimeout(meraKaam, 3000, "Main 3 seconds baad aaya!");*/
/* server.listen(port, [hostname], [backlog], [callback]);*/

// Pehle file banane ka rasta (Route)
app.get('/write-file', (req, res) => {
    const data = "Customer: Anuj Goyal, Item: Inverter, Status: OK";
    console.log("inside get write file");
    // File likho (File Name, Data, Callback)
    fs.writeFile('repair_job.txt', data, (err) => {
        if (err) return res.json({ message: "File likhne mein error!" });
        res.json({ message: "File 'repair_job.txt' ban gayi hai!" });
    });
});

app.get('/read-file', (req, res) => {
    // 1. File ko padho (File ka naam, Encoding, Callback)
    fs.readFile('repair_job.txt', 'utf8', (err, data) => {
        if (err) {
            return res.json({ message: "File nahi mili!" });
        }
        // 2. File ka data React ko bhej do
        res.json({ message: data });
    });
});
/*=================================*/
/*
app.post('/add-repair', (req, res) => {
    // React se bheja gaya data 'req.body' mein milta hai
    const receivedData = req.body; 
    
    console.log("React se aaya data:", receivedData);

    // Hum confirmation bhej dete hain
    res.json({ 
        message: `Success! Item ${receivedData.itemName} ka record mil gaya.` 
    });
});*/

app.post('/add-repair', (req, res) => {
    const record = req.body; 
    // 1. Data ko ek sundar string banate hain
    const dataString = `Item: ${record.itemName} | Issue: ${record.issue} | Cost: ${record.repairCost}\n`;

    // 2. fs.appendFile use karenge (Taki purana data delete na ho, naya niche judta jaye)
    fs.appendFile('repair_job.txt', dataString, (err) => {
        if (err) {
            return res.status(500).json({ message: "File mein save nahi ho paya!" });
        }
        res.json({ message: `Success! ${record.itemName} ka record file mein save ho gaya.` });
    });
});
app.listen(5000, () => console.log("Server running on port 5000"));