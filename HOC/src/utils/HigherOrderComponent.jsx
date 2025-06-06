import React from 'react'

const HigherOrderComponent = (Component) => {
    let isAuth = true
    let wrappedComponent = (para)=>{
        return isAuth ? <Component {...para}/> : <h1>Login</h1>
    }
    return wrappedComponent;
}

export default HigherOrderComponent