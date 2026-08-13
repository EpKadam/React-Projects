import React, { useState } from 'react'
import login from'../assets/login.avif'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [form,setForm]=useState({email:' ',password:' '});
  const navigateMe=useNavigate();


 const userData = localStorage.getItem('usr')

  

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm({...form,[name]:value});
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data } = await axios.get(`http://localhost:5000/employees`)

    const allusers = data;

    const userFound = allusers.find((u) => u.email == form.email)

    if (userFound != null) {

      if (userFound.password == form.password) {
    
        localStorage.setItem("usr" , userFound.role)

        navigateMe('/dashboard', { state: { users: userFound } })
      } else {
        alert('Incorrect Password')
      }
    } else {
      alert('User Does Not Exist')
    }

    setForm({ email: '', password: '' })
  }

  return (
    <div>


      {
        userData &&
        <h2>Already Logged-In</h2>
      }

      {
        !userData && (
          <>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
              email : <input type="text" name='email' value={form.email} onChange={handleChange} required /> <br /><br />
              password : <input type="text" name='password' value={form.password} onChange={handleChange} required /> <br /><br />

              <button type='submit'>Login</button><br /><br />
            </form>
          </>
        )
      }



    </div>
  )
}

export default Login