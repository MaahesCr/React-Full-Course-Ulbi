import React from "react";
import MyBtn from "./UI/Btns/MyBtn";
import { useNavigate } from "react-router-dom"

const PostItem = function (props) {
    const router = useNavigate()

    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'> 
                <MyBtn onClick={()=>router(`/posts/${props.post.id}`)}>
                    Открыть
                </MyBtn>
                <MyBtn onClick={()=>props.remove(props.post)}>
                    Удалить
                </MyBtn>
            </div>
      </div>
    )
}

export default PostItem; 