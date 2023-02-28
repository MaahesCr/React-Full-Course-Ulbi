import React, { useState } from 'react'
import Counter from './components/counter';
import PostItem from './components/postItem';
import './styles/App.css'


function App() {
  
  const [value, setValue] = useState('Some text');


  return (
    <div className="App">
      <PostItem post={{id: 1, title: 'JS', body: 'Some words'}} />
      
    </div>
  );
}

export default App;
