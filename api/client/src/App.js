// import logo from './logo.svg';
import { useState, UseEffect, useEffect } from 'react'
import './App.css';

function App() {
  const [data, setData] = useState('WEB 49 RACK')

  // useEffect(()=>{
  //   fetch('/hello')
  //     .then(res => res.json())
  //     .then(data => setData(data))
  // })
  return (
    <div className="App">
      <header className="App-header">
        {data}
        <h1>TEST 49</h1>
      </header>
    </div>
  );
}


export default App;
