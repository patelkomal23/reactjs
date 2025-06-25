import { getDatabase, ref, set } from 'firebase/database'
import { app, db } from 'firebase'


const App = () => {
      const db = getDatabase(app)

 
   const handleClick=()=>{
    set(ref(db,'products'),{
      name:"Oil",
      price:100,
    })
      
    }
  return (
    <>
      <button className='btn btn-success' onClick={handleClick}>Store Data</button>
    </>
  )
}

export default App