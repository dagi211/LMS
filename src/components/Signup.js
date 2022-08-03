import React from 'react'

function Signup() {
  return (
    <div className='container'>
        
            <form className='login-form signup' action="">
            <h1 className='header'>SIGNUP</h1>
            <hr />
             <div className="mover">
                <input className='login-info' name="fName" type="text" placeholder='First Name' />
                <input className='login-info' name="Lname" type="text" placeholder='Last Name' />
                <input className='login-info' name="Email" type="Email" placeholder='Insert Email' />
                <input className='login-info' name="phoneNo" type="Number" placeholder='Phone no' />
                <input className='login-info' name="password" type="Password" placeholder='Password'/>
                <input className='login-info' name="confirmPassword" type="Password" placeholder='Confirm Password'/>
             </div>
                
                

                <button className='btn'>Sign up</button>
                
            </form>

        

    </div>
  )
}

export default Signup