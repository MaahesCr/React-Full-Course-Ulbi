import React, { useRef, useState } from 'react'
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/postItem';
import PostList from './components/PostList';

import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'JS', body: 'Some words'},
    {id: 2, title: 'Python', body: 'Some words for Py'},
    {id: 3, title: 'C#', body: 'Some words for C#'}
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      {posts.length !==0
        ? 
        <PostList remove={removePost} posts = {posts} title = 'Список 1'/> 
        : 
        <h3 style={{textAlign:'center'}}>Посты не найдены</h3>
      } 
    </div>
  );
}

export default App;
