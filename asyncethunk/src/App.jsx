import React from 'react'
import { useDispatch } from 'react-redux'
import { fetchData } from './features/employee/employeeSlice';
import Form from './components/Form';
import Table from './components/Table';


function App() {
  const dispatch= useDispatch();

  return (
    <>
    <Form/>
    <Table/>

    </>
  )
}

export default App
