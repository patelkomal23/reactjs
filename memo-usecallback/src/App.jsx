import React, { useCallback, useState } from 'react'
import Header from './components/Header'
import Increment from './components/Increment';

function App() {

  const [count,setCount]=useState(0);
  const [mainCount,setMainCount]=useState(0);

  const handleIncrement = useCallback(()=>{
    setCount(count+1);
  },[count])
   
  const handleMainIncrement=()=>{
    setMainCount(mainCount+1);
  }

  return (
    <div>
      <Header/>

      <div className="container">
        <div className="row mt-3">
          <div className="col-md-12">
            <h2>Welcome To My App</h2>
            <h5>Count:{count}</h5>
            <h5>main count:{mainCount}</h5>
            <div className="d-flex gap-2">
              <Increment handleIncrement={handleIncrement} count={count}/>
              <button onClick={handleMainIncrement} className='btn btn-primary' >Primary Increment</button>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default App