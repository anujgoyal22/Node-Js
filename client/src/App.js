import React, { useState } from 'react';

function App() {
  const [msg, setMsg] = useState("Button dabao...");
  const [itemName, setItemName] = useState(""); // User input ke liye
/*
  const callFast = () => {
    fetch('http://localhost:5000/fast')
      .then(res => res.json())
      .then(data => setMsg(data.message));
  };

  const callSlow = () => {
    setMsg("Waiting for 3 seconds...");
    fetch('http://localhost:5000/slow')
      .then(res => res.json())
      .then(data => setMsg(data.message));
  };
  const writeMyFile = () => {
    fetch('http://localhost:5000/write-file')
      .then(res => res.json())
      .then(data => setMsg(data.message));
};
  const readMyFile = () => {
    fetch('http://localhost:5000/read-file')
      .then(res => res.json())
      .then(data => setMsg(data.message));
}; */
/*
// Generic function jo kisi bhi endpoint ko call karega
  const callApi = (endpoint) => {
    setMsg("Loading...");
    fetch(`http://localhost:5000/${endpoint}`)
      .then(res => res.json())
      .then(data => setMsg(data.message || data)) // data.message agar object hai, nahi toh poora data
      .catch(err => setMsg("Server error!"));
  };*/
 /*====================================================*/ 
  const callApi = (endpoint) => {
    setMsg("Kaam ho raha hai...");
    fetch('http://localhost:5000/' + endpoint)
      .then(res => res.json())
      .then(data => setMsg(data.message))
      .catch(err => setMsg("Error: Server connect nahi hua"));
  };
  /*================================================*/
  const sendData = () => {
    setMsg("Data bhej rahe hain...");

    fetch('http://localhost:5000/add-repair', {
        method: 'POST', // Method batana zaroori hai
        headers: {
            'Content-Type': 'application/json' // Server ko batao ki hum JSON bhej rahe hain
        },
        body: JSON.stringify({
            itemName: "Inverter",
            issue: "Output voltage low",
            repairCost: 450
        }) // Object ko string bana kar bhejna padta hai
    })
    .then(res => res.json())
    .then(data => setMsg(data.message))
    .catch(err => setMsg("Error sending data"));
};
/*
const handlePost = () => {
    fetch('http://localhost:5000/add-repair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            itemName: itemName, // Aapka type kiya hua naam
            issue: "Circuit Check",
            repairCost: 500
        })
    })
    .then(res => res.json())
    .then(data => setMsg(data.message));
  };                    */

/*========================================*/
// POST request: Jo input box se data lega
  const handlePost = () => {
    if(!itemName) {
        setMsg("Pehle item ka naam toh likho!");
        return;
    }
    setMsg("Data bhej rahe hain...");
    fetch('http://localhost:5000/add-repair', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            itemName: itemName, 
            issue: "Circuit Check",
            repairCost: 500
        })
    })
    .then(res => res.json())
    .then(data => {
        setMsg(data.message);
        setItemName(""); // Save hone ke baad input khali kar do
    })
    .catch(err => setMsg("Error saving data"));
  };
/*========================================*/
/*
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Node.js Event Loop Test</h1>
      <p><b>Server Response:</b> {msg}</p>
      
      <button onClick={callFast}>Fast Request</button>
      <button onClick={callSlow} style={{ marginLeft: '10px' }}>Slow Request (3s)</button>
      <button onClick={readMyFile}>Read File Data</button>
      <button onClick={writeMyFile}>Write File Data</button>
    </div>

  );*/
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Node.js & React Lab</h1>
      <p><b>Server Response:</b> {msg}</p>
      <div style={{ marginBottom: '20px', padding: '20px', border: '1px solid #ccc', display: 'inline-block' }}>
      <input 
          type="text" 
          placeholder="Item ka naam (e.g. LED TV)" 
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
          style={{ padding: '10px', width: '250px' }}
        />
      <button onClick={handlePost} style={{ padding: '10px', marginLeft: '5px', backgroundColor: '#4CAF50', color: 'white' }}>
          Save Repair (POST)
        </button></div>
      {/* Har button ab ek hi function (callApi) ko use kar raha hai */}
      <div style={{ marginTop: '20px' }}>
      <button onClick={() => callApi('fast')}>Fast Request</button>
      <button onClick={() => callApi('slow')} style={{ marginLeft: '10px' }}>Slow Request</button>
      <button onClick={() => callApi('write-file')} style={{ marginLeft: '10px' }}>Write File</button>
      <button onClick={() => callApi('read-file')} style={{ marginLeft: '10px' }}>Read File</button>
      <button onClick={sendData} style={{ marginLeft: '10px', backgroundColor: 'orange' }}>
             Send Repair Data (POST)</button>
             </div>
             {/*========================================================*/}
    <div style={{ marginTop: '20px' }}>
        <button onClick={() => {
            fetch('http://localhost:5000/read-file')
            .then(r => r.json())
            .then(d => setMsg(d.message))
        }} style={{ backgroundColor: '#f0f0f0' }}>
           Show All Saved Records
        </button>
      </div>
          {/*========================================================*/}
    </div>
  );
}

export default App;