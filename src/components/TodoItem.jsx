import React, { useState } from "react";
import './styles/todoItem.css'
import MyButton from "./UI/button/MyButton";
const PostItem = (props) => {

  return (
    <div className="wrapper">
      <div>
        <p className="title">{props.post.title}</p>
        <p>{props.post.description}</p>
        {
          props.post.subTaskOne? <p> • {props.post.subTaskOne}</p> : <p></p>
        }
        {
          props.post.subTaskTwo? <p> • {props.post.subTaskTwo}</p> : <p></p>
        }
      </div>

      <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      <MyButton onClick={() => props.status(props.post)}>Change Status</MyButton>
    </div>

  );
};

export default PostItem