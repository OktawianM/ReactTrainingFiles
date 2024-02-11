import { useState } from 'react';
import './App.css';

function App() {

  const [btnNo, checkBtnNo] = useState();

  return (
    <>
      <button onClick={() => checkBtnNo(1)}>Button 1</button>
      <button onClick={() => checkBtnNo(2)}>Button 2</button>
      <button onClick={() => checkBtnNo(3)}>Button 3</button>
      <div>Last button clicked: {btnNo}</div>
    </>
  );
}

export default App;
