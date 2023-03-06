import React, { useMemo, useRef, useState } from 'react'
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';
import MyBtn from './components/UI/Btns/MyBtn';


import './styles/App.css'
import MyModal from './components/UI/MyModal/MyModal';

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'АА', body: 'ХХХ words'},
    {id: 2, title: 'ВВ', body: 'ЪЪЪ words for Py'},
    {id: 3, title: 'ГГ', body: 'ООО words for C#'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort]))
    } return posts;
  }, [filter.sort, posts]); 

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLocaleLowerCase()))
  }, [filter.query, sortedPosts])

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
      <PostList remove={removePost} posts = {sortedAndSearchedPosts} title = 'Список 1'/> 
    </div>
  );
}

export default App;
