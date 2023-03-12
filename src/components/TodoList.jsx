import React, { useState } from "react";
import TodoItem from "./TodoItem";
import './styles/todoList.css'

const PostList = ({posts, remove, status, done}) => {

  return (
    <div className="postList">
      <div>
        <div className="wrapperDoing">
          <div className="statusDoing"></div>
          <p className="doing">DOING ({posts.length})</p>
        </div>
        
        {posts.map( (post, index) => 
          <TodoItem number={index + 1} post={post} key={post.id} remove={remove} status={status}/>
        )}        
      </div>
      <div>
        <div className="wrapperDone">
          <div className="statusDone"></div>
          <p className="done">DONE ({done.length})</p>
        </div>
        { done ?
          done.map(todo => 
          <TodoItem post={todo} key={todo.id} remove={remove} status={status}/>
        )
          : <p></p>
      }
      </div>
    </div>

  );
};

export default PostList