import React from 'react'
import './Val.css'
import { Link } from 'react-router-dom'


function Register() {
  return (
    <form className='register'>
      <h1>Register</h1>
    <input type="text" placeholder='username' />
    <input type="password" placeholder='password' />
     <button>Register</button>

     <footer>
     <Link to="/login">Already registered? Login Now</Link>
     </footer>
   </form>
  )
}

export default Register
