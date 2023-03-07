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
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetch';

function App() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchPosts()
  }, []);

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
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
      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }

      {isPostsLoading
        ? <div style={{display:'flex', justifyContent:'center', marginTop:30}}><Loader/></div> 
        : <PostList remove={removePost} posts = {sortedAndSearchedPosts} title = 'Список 1'/> 
      }
    </div>
  );
}

export default App;
