import React, {useState} from 'react'
import '../styles/App.css';
const App = () => {
  const[btnState, setBtnState] =useState(false);
  
  const handleClick = ()=>{
    setBtnState(!btnState)
  }
  
  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
      {btnState? 'ON': 'OFF'}
      </button>
      <br />
      <br />
      <button id="btn2" onClick={handleClick}>
        {!btnState? 'ON': 'OFF'}
      </button>
    </div>
  );
}


export default App;
