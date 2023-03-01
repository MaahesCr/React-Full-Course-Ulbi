import React, { useRef, useState } from 'react'
import Counter from './components/counter';
import PostItem from './components/postItem';
import PostList from './components/PostList';
import MyBtn from './components/UI/Btns/MyBtn';
import MyInp from './components/UI/Input/MyInp';
import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Some words'},
    {id: 2, title: 'Python', body: 'Some words for Py'},
    {id: 3, title: 'C#', body: 'Some words for C#'}
  ])

  const [title, setTitle] = useState('');

  const addNewPost = function (e) {
    e.preventDefault()
    console.log(title)
    console.log(bodyInputRef.current.value)
    }

  const bodyInputRef = useRef();

  return (
    <div className="App">
      <form>
        <MyInp 
          type="text" 
          value = {title}
          onChange={e=>setTitle(e.target.value)}
          placeholder='Название поста'
        >
        </MyInp>
        <MyInp 
          ref={bodyInputRef}
          type="text" 
          placeholder='Описание поста'
        />
        
        <MyBtn onClick={addNewPost} >Создать пост</MyBtn>
      </form>
      <PostList posts = {posts} title = 'Список 1'/>
    </div>
  );
}

export default App;
