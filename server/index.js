const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors());

// 1. Fast Route: Ye turant jawab dega
app.get('/fast', (req, res) => {
    res.json({ message: "Main turant wapas aa gaya!" });
});

// 2. Event Loop Demo Route (Slow): 
app.get('/slow', (req, res) => {
    console.log("Slow request aayi...");
    
    // Ye setTimeout Event Loop ko block nahi karega
    setTimeout(() => {
        res.json({ message: "Main 3 seconds baad aaya, bina server ko roke!" });
    }, 3000);

    console.log("Server ne request side mein rakh di, ab wo doosre kaam kar sakta hai.");
});

app.listen(5000, () => console.log("Server running on port 5000"));