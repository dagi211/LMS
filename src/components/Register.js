import React from 'react'

function Register() {
  return (
    <div className='container'>
        
    <form className='login-form loan-form' action="">

        <h1 className="header">Register Books</h1>
        <hr />
     <div className="mover-reg">
        <input className='login-info' type="text" name="Email" placeholder='Insert book name' />
        <input className='login-info' type="text" name="Email" placeholder='Insert Author' />
        <input className='login-info' type="text" name="ISBN" placeholder='Insert the ISBN number'/>
        <input className='login-info' type="text" name="Amount" placeholder='Insert number of available copies'/>
     </div>
        
        

        <button className='btn'>Register</button>
        
    </form>



</div>
  )
}

export default Register