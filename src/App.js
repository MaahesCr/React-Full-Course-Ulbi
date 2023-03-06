import React, { useMemo, useRef, useState, useEffect } from 'react'
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import MyBtn from './components/UI/Btns/MyBtn';


import './styles/App.css'
import MyModal from './components/UI/MyModal/MyModal';
import { usePosts } from './hooks/usePost';
import axios from 'axios';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, []);

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyBtn style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyBtn>
      <MyModal visable={modal} setVisable={setModal} >
        <PostForm create={createPost}/>
      </MyModal>
      <hr style={{margin:'15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts = {sortedAndSearchedPosts} title = 'Список 1'/> 
    </div>
  );
}

export default App;
