import React from 'react';
import { useState } from 'react';

function App() {
  const [data,setData]=useState(0)
  function updateData()
  {
    setData(data+1)
   
  }
  function decrement(){
    setData(data-1)
  }
  return (
    <div className="App">
     <h1 style={{marginLeft: '50%'}}>{data}</h1>
     <button onClick={updateData} style={{color: 'red',marginLeft: '45%'}}>Counter</button>
     <button onClick={decrement}style={{marginLeft: '10px',color:'blue'}} >Decount</button>
    </div>
  );
}

export default App;