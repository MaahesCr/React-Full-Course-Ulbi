import React, {useState} from 'react'
import MyBtn from './UI/Btns/MyBtn';
import MyInp from './UI/Input/MyInp';

export default function PostForm({create}) {
    const [post, setPost] = useState({title: '', body: ''});

    const addNewPost = function (e) {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
    }
    

    return (
    <form>
    <MyInp 
      value = {post.title}
      onChange={e=>setPost({...post, title:e.target.value})}
      type="text" 
      placeholder='Название поста'
    >
    </MyInp>
    <MyInp 
      value = {post.body}
      onChange={e=>setPost({...post, body:e.target.value})}
      type="text" 
      placeholder='Описание поста'
    />
    
    <MyBtn onClick={addNewPost} >Создать пост</MyBtn>
  </form>
  )
}
