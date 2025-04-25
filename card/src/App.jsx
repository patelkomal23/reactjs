
import React, { useEffect, useState } from 'react'
import Card from './component/Card';

function App() {

  const [products,setProduct] = useState([]);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    setProduct(data);
  });
  },[])

  return (
    <>
      <div className='container'>
        <div className='row mt-5 g-4'>
            {products.map((product,index)=>(
            <div className="col-md-4">
              <Card product={product} />
            </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default App
