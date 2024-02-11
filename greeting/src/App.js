import { useState } from 'react';
import './index.css';

function App() {
const [firstname, setFirstName] = useState("");
const [lastname, setLastName] = useState("");

return(
<div id="formArea">
  <section>
    <label>First name</label>
    <input type="text" onChange={(a)=>setFirstName(a.target.value)}></input>
  </section>
  <section>
    <label>Last name</label>
    <input type="text" onChange={(a)=>setLastName(a.target.value)}></input>
  </section>
  
  <button onClick={()=>alert("Hi " + firstname + " " + lastname)}>Greet me</button>
</div>
)
}

export default App;