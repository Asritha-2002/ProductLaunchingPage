import React, { useState } from 'react'
import './SignIn.css'
import {useNavigate} from 'react-router-dom'
const SignIn = () => {
const navigate=useNavigate()
    const [user,setUser]=useState({
        username:'',
        password:''
    })

    function handleChange(event){

console.log(event.target.value,event.target.name);
setUser({
    ...user,
    [event.target.name]:event.target.value
})


    }

    function handleFormSubmit(e){
e.preventDefault()
        if(user.username==='admin'&& user.password==='admin'){
            alert('login success')
            navigate('/products')

        }else{
            alert('Pease Enter Valid Credentials')
        }
        setUser({
            username:'',
            password:''
        })
    }
  return (
    <div>
        <h2 className='heading'>Login Form</h2>
      <form onSubmit={handleFormSubmit}  className='signInForm'>
        <label htmlFor="username" >Enter User Name: </label>
            <input type="text" placeholder='Enter email...' id='username'
            value={user.username} onChange={handleChange}
            name='username'/>
        
        <label htmlFor="password" >Enter Password: </label>
            <input type="text" id='password' placeholder='Enter password...' 
            value={user.password} onChange={handleChange }
            name='password'/>
       
        <button>Sign in</button>
      </form>
    </div>
  )
}

export default SignIn
