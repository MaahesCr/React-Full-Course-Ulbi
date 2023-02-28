import React, { useState } from 'react'


function App() {
  
  const [likes, setLikes] = useState(0); 
  const [value, setValue] = useState('Some text');

  function Increment() {
    setLikes(likes + 1)
  }

  function Decrement() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>{likes}</h1>
      <h1>{value}</h1>
      <input 
        type='tetx' 
        value={value}
        onChange = {event => setValue(event.target.value)}
      ></input>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}

export default App;
