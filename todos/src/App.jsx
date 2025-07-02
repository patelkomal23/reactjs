import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodo, getTodos } from './features/todos/Thunk';

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getTodos());
  },[])
  return (
    <div>
      <button onClick={()=> dispatch(createTodo({text:'Complete Task...'}))} >add todo</button>
    </div>
  )
}

export default App
