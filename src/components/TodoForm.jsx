import React, {useState} from "react";
import './styles/todoForm.css'

const PostForm = ({create}) => {
  const [post, setPost] = useState({title: '', description: '', subTaskOne: '', subTaskTwo: '', status: false,});

  const addNewPost = () => {
    const newPost = {
      ...post, id: Date.now()
    }
    if (post.title.length > 1 && post.description.length > 1) {
      create(newPost)
      setPost({title: '', description: '', subTaskOne: '', subTaskTwo: ''})      
    } else if (post.title.length <= 1 && post.description.length > 1){
      setPost({...post, title: 'Введите больше одного символа'})
    } else if (post.title.length > 1 && post.description.length <= 1){
      setPost({...post, description: 'Введите больше одного символа'})
    } else {
      setPost({...post, title: 'Введите больше одного символа', description: 'Введите больше одного символа'})
    }

  }

  return (
    <div>
      <p className="addNewTask">Add New Task</p>
     <form>
      <div className="input_wrapper">
        <p>Title</p>
        <input type='text'
        placeholder="e.g Take coffe break" 
        value={post.title}
        onChange={e => setPost({...post, title: e.target.value})}>
        </input>
      </div>

      <div className="input_wrapper">
        <p>Description</p>
        <input className="description"
          type='text' 
          placeholder="e.g It's always good to take a break. This 15 minute break will recharge the batteries a little."
          value={post.description}
          onChange={e => setPost({...post, description: e.target.value})}>
        </input>
      </div>

      <div className="input_wrapper">
        <p>Subtasks</p>
        <input 
          type='text' 
          placeholder='subTaskOne'
          value={post.subTaskOne}
          onChange={e => setPost({...post, subTaskOne: e.target.value})}>
        </input>

        <input 
          type='text' 
          placeholder='subTaskTwo'
          value={post.subTaskTwo}
          onChange={e => setPost({...post, subTaskTwo: e.target.value})}>
        </input>
      </div>

        <button className="myButton" onClick={addNewPost} type="button">Create Task</button>
      </form>
    </div>
  )
}

export default PostForm;