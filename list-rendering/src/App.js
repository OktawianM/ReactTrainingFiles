import { useState } from 'react';

function App() {
  
  const [animal, setAnimal] = useState("");
  const [animalsArr, setAnimalsArr] = useState([{id: 0, value: "dog"}, {id: 1, value: "cat"}, {id: 2, value: "chicken"}]);

  const listItems = animalsArr.map((animalItem) => (
    <li key={animalItem.toString()}>
      {animalItem.value}{'  '}
      <button onClick={() => {
        setAnimalsArr(
          animalsArr.filter(a =>
            a.id !== animalItem.id
          )
        );
      }}>      
      <img src="trash.svg" alt="trashIcon"></img>
      </button>
    </li>
    ))
 
  return (
    <div class="gridcontainer">
      <div id="listOfAnimals">
        <h1>List of animals:</h1>
         <ul>
          {listItems}
        </ul>
      </div>

      <div id="btnArea">
        <input onChange={(e) => setAnimal(e.target.value)} />   
        <button style={{color: "black"}}  onClick={() => {
          setAnimalsArr([...animalsArr, {id: animalsArr.length, value: animal}]);
        }}>Add</button>
      </div>
    </div>
  );
}

export default App;