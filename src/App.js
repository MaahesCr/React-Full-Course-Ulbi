import React, { useRef, useState } from 'react'
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/postItem';
import PostList from './components/PostList';
import MySelect from './components/UI/Select/MySelect';

import './styles/App.css'

function App() {

  const [posts, setPosts] = useState([
    {id: 1, title: 'АА', body: 'ХХХ words'},
    {id: 2, title: 'ВВ', body: 'ЪЪЪ words for Py'},
    {id: 3, title: 'ГГ', body: 'ООО words for C#'}
  ])

  const [selectedSort, setSelectedSort] = useState('')

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin:'15px 0'}}/>
      <div>
        <MySelect 
          value={selectedSort}
          onChange = {sortPosts}
          defaultValue='Сортировака по'
          option={[
            {value:'title', name:'По названию'},
            {value:'body', name:'По описанию'},
          ]}
        />
      </div>
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
