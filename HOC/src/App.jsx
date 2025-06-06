import React from 'react'

import Dashboard from './components/Dashboard'
import Home from './components/Home'
import HigherOrderComponent from './utils/HigherOrderComponent'

const App = () => {

  let AuthDash = HigherOrderComponent(Dashboard)

  return (
    <>
    <Home/>
      <AuthDash user = "ABC"/>
    </>
  )
}

export default App