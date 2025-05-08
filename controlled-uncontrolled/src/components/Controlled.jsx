import React, { useState } from 'react'

function Controlled() {
 const [input,setInput]=useState('')

 const handleChange=(e)=>{
 setInput(e.target.value)
 }
    
  return (
    <>
     <input type="text" onChange={handleChange} /> 
     <h2>{input}</h2>
    </>
  )
}

export default Controlled
