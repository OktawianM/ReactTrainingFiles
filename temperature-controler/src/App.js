import { useEffect, useState } from 'react';

function App() {
  const [value, setValue] = useState(0);
  const [temperature, setTemperature] = useState("lightblue")

  useEffect(() => (
    value > 20 ? setTemperature("red") : setTemperature("lightblue")
  ), [value])

  const add = () => {
    setValue(value + 1);
  }

  const substract = () => {
    setValue(value - 1);
  }

  return (
    <div style={{ backgroundColor: temperature }}>
      <button onClick={() => add()}>+</button>
      <h1>Temperature: ${value}</h1>
      <button onClick={() => substract()}>-</button>
    </div>
  );
}

export default App;
