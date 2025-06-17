import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Login() {
    const {setUser} = useContext(UserContext);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(setUser());
        
    }

  return (
    <>
     <form action="" method="post" onSubmit={handleSubmit}>
        <input type="text" name="username" value={username || ''} onChange={(e)=>setUsername(e.target.value)} id="" />
        <input type="text" name="password" value={password || ''} onChange={(e)=>setPassword(e.target.value)} id="" />
        <button>Login</button>
     </form> 
    </>
  )
}

export default Login
