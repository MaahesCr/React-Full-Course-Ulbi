import React, { useMemo, useRef, useState } from 'react'
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import PostFilter from './components/PostFilter';


import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'АА', body: 'ХХХ words'},
    {id: 2, title: 'ВВ', body: 'ЪЪЪ words for Py'},
    {id: 3, title: 'ГГ', body: 'ООО words for C#'}
  ])

  const [filter, setFilter] = useState({sort: '', query: ''})

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
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
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
