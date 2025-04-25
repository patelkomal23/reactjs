import React from 'react'

function User({handleChange,handleSubmit,name,input}) {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value ={input || ' '} onChange={handleChange} /><br /><br />
        <button>Submit</button>        
      </form>

      <h2>{name}</h2>

    </>
  )
}

export default User