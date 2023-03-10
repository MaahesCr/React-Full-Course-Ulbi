import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetch';

export default function PostIdPage() {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [fetchPostById, isLoading, error] = useFetching( async () => {
        const responce = await PostService.getById(params.id)
        setPost(responce.data)
    });

    //
    const [fetchComments, isComLoading, comError] = useFetching( async () => {
        const responce = await PostService.getCommentsByPostId(params.id)
        setComments(responce.data)
        console.log(comments)
        //console.log(comments.data[0].body)
    });
    //

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []);

  return (
    <div>
        <h1>Вы открыли страницу поста с ID поста = {params.id} </h1>
        {isLoading
            ?   <Loader/> 
            :   <div>{post.id} {post.title}</div>
        }
        <h1>
            Комментарии 
        </h1>
        {isComLoading
            ?   <Loader/> 
            :   <div>
                    {comments.map(comm => 
                        <div style={{marginTop:20}}>
                            <h5>{comm.email}</h5>
                            <h5 style={{marginTop:7}}>{comm.body}</h5>
                            <hr />
                        </div>
                    )}
                </div>
        }
    </div>
  )
}
