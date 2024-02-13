import './index.css';

function App() {

const jokePackage =
  [
    {
      id: 1,
      setup: "What's the best thing about a Boolean?",
      punchline: "Even if you're wrong, you're only off by a bit"
    },
    {
      id: 2,
      setup: "Why do programmers wear glasses?",
      punchline: "Because they need to C#"
    },
    {
      id: 3,
      setup: "Why did the edge server go bankrupt?",
      punchline: "Because it ran out of cache"
    },
    {
      id: 4,
      setup: "Why do programmers confuse Christmas with Halloween?",
      punchline: "Because OCT 31 is the same as DEC 25."
    },
    {
      id: 5,
      setup: "Why did the Java developer quit his job?",
      punchline: "Because he didn’t get arrays."
    }
  ]


const renderedJokes = jokePackage.map((joke)=>
  <div class="jokeClass" key={joke.id}>
    <p>({joke.setup})</p>
    <p>({joke.punchline})</p>
  </div>
)
return(
<>
  <h3>Random Joke for today: </h3>
  <div class="jokesArea">
    {renderedJokes[Math.floor(Math.random()*4)]}
  </div>
</>
)
}

export default App;