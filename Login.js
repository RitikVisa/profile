import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [user,setUser]= useState({Email:'',Password:''})
  const navigate = useNavigate()

  function handleChange(e) {
    setUser({...user,[e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("user",user);
    login(user)
    navigate('/todo')
  }

  async function login(obj) {
    try {
      const {data} = await axios.post('http://localhost:5000/api/user/login',obj)
      console.log(data,"login user data");
      localStorage.setItem('token',data.data.token)
    } catch (error) {
      console.log(error.message);
    }
  }


  return (
    <div className='container'>
      <div className="row">
        <h1>Login</h1>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            {/* <input onChange={handleChange} type="text" name='Name' placeholder='Enter Your Name' className="form-control my-2" /> */}
            <input onChange={handleChange} type="email" name='Email' placeholder='Enter Your Email'  className="form-control my-2" />
            <input onChange={handleChange} type="password" name='Password' placeholder='Enter Your Password'  className="form-control my-2" />

            <input type="submit" value='login' className="btn btn-dark" />
          </form>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  )
}

export default Login