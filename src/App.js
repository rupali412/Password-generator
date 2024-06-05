import { useState } from "react";
import "./App.css";
import { lc, nc, sc, uc } from "./data/Passchar";

function App() {
  let [uppercase, setUppercase] = useState(false);
  let [lowercase, setLowercase] = useState(false);
  let [number, setNumber] = useState(false);
  let [symbols, setSymbols] = useState(false);
  let [passlen, setpasslen] = useState(10);
  let [fpass, setFpass] = useState("");
  let createpass = () => {
    let charset = "";
    let finalpass = "";
    if (uppercase || lowercase || number || symbols) {
      if (uppercase)charset += uc;
      if (lowercase)charset += lc;
      if (number)charset += nc;
      if (symbols)charset += sc;

      for (let i = 0; i < passlen; i++) {
        finalpass += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      setFpass(finalpass);
    } else {
      alert("please choose atleast one checkbox!");
    }
  }
  let copypass=()=>{
    navigator.clipboard.writeText(fpass)
  }

  return (
    <>
      <div className="passwordbox">
        <h2>Password Generator</h2>
        <div className="passwordboxin">
          <input type="text" readOnly value={fpass} />
          <button onClick={copypass}>copy</button>
        </div>
        <div className="passlength">
          <label>password Length</label>
          <input
            type="number"
            max={20}
            min={8}
            value={passlen}
            onChange={(event) => setpasslen(event.target.value)}
          />
        </div>
        <div className="passlength">
          <label>Include uppercase letter</label>
          <input
            type="checkbox"
            checked={uppercase}
            onChange={() => setUppercase(!uppercase)}
          />
        </div>
        <div className="passlength">
          <label>Include lowercase letter</label>
          <input
            type="checkbox"
            checked={lowercase}
            onChange={() => setLowercase(!lowercase)}
          />
        </div>
        <div className="passlength">
          <label>Include numbers</label>
          <input type="checkbox" checked={number} onChange={() => setNumber(!number)} />
        </div>
        <div className="passlength">
          <label>Include symbols</label>
          <input
            type="checkbox"
            checked={symbols}
            onChange={() => setSymbols(!symbols)}
          />
        </div>
        <button className="btn" onClick={createpass}>
          Generate password
        </button>
      </div>
    </>
  );
}

export default App;
