import React from 'react'

function App() {

  const handleFetch=()=>{
    fetch('http://localhost:3000/products',{
      method:'GET',
      headers:{
        'Content-Type':'application/json'
      }
    }).then((res)=>{
      console.log("data fetched");
      return res.json();
    }).then((data)=>{
      console.log(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  const handleAdd=()=>{
    let obj ={
       "id": "8",
      "title": "oil",
      "views": 500
    }
        fetch('http://localhost:3000/products',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },body: JSON.stringify(obj)
    }).then((res)=>{
      console.log("data fetched");
      return res.json();
    }).then((data)=>{
      console.log(data); 

      
    }).catch((err)=>{
      console.log(err);
    })
  }
  return (
    <>
    <button className='btn btn-primary' onClick={handleFetch}>Fetch Data</button>
    <button className='btn btn-primary' onClick={handleAdd}>Add Data</button>
      
    </>
  )
}

export default App