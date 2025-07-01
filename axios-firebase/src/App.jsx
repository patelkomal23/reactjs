import React, { useState } from 'react'
import Form from './components/From'
import Table from './components/Table'

const App = () => {
    const [user,setUser] = useState({});
  const [editId,setEditId] = useState(null);
  const updateUser =(user)=>{
    setUser(user);
    setEditId(user.id);
  }
  return (
    <>
    <Form user={user} setUser={setUser} editId={editId} setEditId={setEditId} />
    <Table updateUser={updateUser}/>
      
    </>
  )
}

export default App