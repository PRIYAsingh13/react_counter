import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

function App() {
  let [num, setNum] = useState(0)


  function add() {
    num = num + 1
    setNum(num)
  }
  function subtract() {
    num = num - 1
    setNum(num)

  }
  return (
    <div className="App">
      <button className="btn" onClick={subtract}>-</button>
      {num}
      <button onClick={add}>+</button>
    </div>
  );
}

export default App;
