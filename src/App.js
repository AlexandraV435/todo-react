import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './components/styles/app.css'
import MyButton from "./components/UI/button/MyButton";
import MyModal from "./components/UI/MyModal/MyModal";

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'Post 1', description: 'this is post 1'},
    {id: 2, title: 'Post 2', description: 'this is post 2'},
    {id: 3, title: 'Post 3', description: 'this is post 3'},
  ])

  const [done, setDone] = useState([
    {id: 7, title: 'Post 7', description: 'this is post 7'},
  ])

  const [modal, setModal] = useState(false)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removeTask = (task) => {
    setPosts(posts.filter(t => t.id !== task.id ))
    setDone(done.filter(t => t.id !== task.id ))
  }

  const changeStatus = (task) => {
    posts.forEach(function(elem) {
      if (elem.id == task.id) {
        console.log('one')
        setDone([...done, elem])
        setPosts(posts.filter(t => t.id !== task.id ))
        elem.status = !elem.status 
      }
    })
    done.forEach(function(elem) {
      if (elem.id == task.id) {
        setPosts([...posts, task])
        setDone(done.filter(t => t.id !== task.id))
      }
    })
  }

  return (
    <div className="App">
      <p className="name">Platform Launch</p>
      <div className="wrapper_btn">
        <MyButton onClick={() => setModal(true)} className='btn'>
          +Add New Task
        </MyButton>
      </div>

      <MyModal visible={modal} setVisible={setModal}>
        <TodoForm create={createPost}/>
      </MyModal>
      {posts.length || done.length
        ?<div className="postListInApp">
          <TodoList remove={removeTask} status={changeStatus} posts={posts} done={done}/>
        </div>
        : <div>Задач пока нет</div>
      }
    </div>
  );
}

export default App;

