import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  const add = (currentValue) => {
    setValue(value + 1);
  }

  const substract = (currentValue) => {
    setValue(value - 1);
  }

  return (
    <h1>Simple counter</h1>,
    <div>
      <button onClick={() => add()}>+</button>
      <h1>Current value: ${value}</h1>
      <button onClick={() => substract()}>-</button>
    </div>
  );
}

export default App;
