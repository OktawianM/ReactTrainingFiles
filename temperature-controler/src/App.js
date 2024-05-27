import { useEffect, useState } from 'react';

function App() {
  const [redValue, setRedValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);
  const [tempValue, setTempValue] = useState(0);

  const warmer = () => {
    setRedValue((prev) => prev + 10);
    setBlueValue((prev) => prev - 10);
    setTempValue((prev) => prev + 1);
  }

  const colder = () => {
    setRedValue((prev) => prev - 10);
    setBlueValue((prev) => prev + 10);
    setTempValue((prev) => prev - 1);
  }

  return (
    <div style={{ backgroundColor: `rgba(${redValue}, ${0}, ${blueValue}, ${0.5})` }}>
      <button onClick={() => warmer()}>+</button>
      <h1>Temperature: ${tempValue}</h1>
      <button onClick={() => colder()}>-</button>
    </div>
  );
}

export default App;
