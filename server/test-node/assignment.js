// 1. Maan lijiye ye data kisi database ya API se aaya hai (JSON Format)
const componentsJSON = `[
    {"id": 1, "name": "Resistor 10k", "category": "Passive", "stock": true},
    {"id": 2, "name": "LED Red", "category": "Opto", "stock": false},
    {"id": 3, "name": "Capacitor 100uF", "category": "Passive", "stock": true},
    {"id": 4, "name": "Transistor BC547", "category": "Semiconductor", "stock": false},
    {"id": 5, "name": "Zener Diode 5.1V", "category": "Diode", "stock": true}
]`;

// Task A: Is String (JSON) ko wapas JavaScript Object (Array) mein badlein
const components = JSON.parse(componentsJSON);

// Task B: Filter ka use karke sirf wo dhoondein jinka stock 'true' hai
const availableItems = components.filter(item => item.stock === true);

// Task C: Result ko print karein
console.log("--- Available Components in Shop ---");
availableItems.forEach(item => {
    console.log(`Naam: ${item.name} | Category: ${item.category}`);
});
availableItems.forEach(function(item) {
    console.log("Naam: " + item.name + " | Category: " + item.category);
});