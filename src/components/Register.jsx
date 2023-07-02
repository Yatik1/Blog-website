import { useState } from 'react';
import React from 'react'
import './Val.css'
import { Link } from 'react-router-dom'


function Register() {
  
   const [username, setUsername] = useState('');
   const [password , setPassword] = useState('');

   async function reg(ev){
       ev.preventDefault();
       await fetch('http://localhost:5000/register' , {
           method: 'POST',
           body: JSON.stringify({username ,password}),
           headers: {'Content-Type': 'application/json'},
       })
   }

  return (
    <form className='register' onSubmit={reg}>
      <h1>Register</h1>
    <input type="text" 
            placeholder='username' 
            value={username} 
            onChange={e=> setUsername(e.target.value)}/>

    <input type="password"
           placeholder='password'
            value={password} 
            onChange={e => setPassword(e.target.value)}/>
            
     <button>Register</button>

     <footer>
     <Link to="/login">Already registered? Login Now</Link>
     </footer>
   </form>
  )
}

export default Register
