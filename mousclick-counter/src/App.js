import { useState,} from "react";

function App() {
  const [inputValue, setInputValue] = useState(0);
 
  return (
    <>    
      <button onClick={() => setInputValue(inputValue + 1)}>Click me!</button>
      <h2>You clicked me {inputValue} times</h2> 
    </>
  );
}

export default App;