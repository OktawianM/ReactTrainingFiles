import React, { useState } from "react";
import './index.css';

function App() {
    const [title, setTitle] = useState(null);
    const loadTitle = () => {
      fetch("https://jsonplaceholder.typicode.com/todos/", {
        method: "GET",
        
      })
        .then((response) => response.json())
        .then((data) => {
          setTitle(data[Math.floor(Math.random()*(data.length - 1))].title);
        })
        .catch((error) => console.log(error));
    };
    return (
      <div>
        <button onClick={() => loadTitle()}>Load title line</button>
        <h2>Title: </h2>
        {title}
      </div>
    );
  
}

export default App;

