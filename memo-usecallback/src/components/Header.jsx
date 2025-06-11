
import React from 'react'

function Header() {
  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center py-2">
            <div className='d-flex gap-2'> 
                <a href=""className='text-dark text-decoration-none'>Home</a>
                <a href=""className='text-dark text-decoration-none'>About</a>
                <a href=""className='text-dark text-decoration-none'>Contact</a>
                <a href=""className='text-dark text-decoration-none'>Blog</a>
            </div>
            <div>
                Admin,
            </div>
        </div>
      </div>
    </>
  )
}

export default Header
