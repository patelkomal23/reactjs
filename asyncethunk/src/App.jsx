import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './features/employee/employeeSlice';


function App() {
  const dispatch= useDispatch();

  return (
    <>
      <button onClick={()=>dispatch(fetchData())}>Fetch </button>
    </>
  )
}

export default App
