import './App.css';

function App() {

  const catchClick = () => {
    alert("You've clicked me!");
  }

  return (
    <button onClick={() => catchClick()}>Click me!</button>
    );
}



export default App;
