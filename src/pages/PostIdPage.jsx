import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetch';

export default function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [fetchPostById, isLoading, error] = useFetching( async () => {
        const responce = await PostService.getById(params.id)
        setPost(responce.data)
    });

    useEffect(() => {
        fetchPostById(params.id)
    }, []);

  return (
    <div>
        <h1>Вы открыли страницу поста с ID поста = {params.id} </h1>
        {isLoading
            ?   <Loader/> 
            :   <div>{post.id} {post.title}</div>
        }
    </div>
  )
}
