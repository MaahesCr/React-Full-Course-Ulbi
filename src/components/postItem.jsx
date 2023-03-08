import React from "react";
import MyBtn from "./UI/Btns/MyBtn";

const PostItem = function (props) {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id} {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
            <div className='post__btns'> 
                <MyBtn onClick={()=>props.remove(props.post)}>Удалить</MyBtn>
            </div>
      </div>
    )
}

export default PostItem; 