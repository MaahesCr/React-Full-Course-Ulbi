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
import { getPageCount, getPageArray } from './utils/pages.js'
import Pagination from './components/UI/Pagination/Pagination';

function App() {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page]);


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
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

      <Pagination
        totalPages = {totalPages} 
        page = {page}
        changePage = {changePage}
      />
    
    </div>
  );
}

export default App;
