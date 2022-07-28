import React from 'react'

function Home() {
  return (
    <div className='container'>
        
            <form className='login-form' action="">
            <h1 className='header'>LOGIN</h1>
            <hr />
             <div className="mover">
                <input className='login-info' type="text" name="Email" placeholder='Email or phone' />
                <input className='login-info' type="password" name="Password" placeholder='Password'/>
             </div>
                <p>Forgot Password?<a href="#"> click here</a></p>
                

                <button className='btn'>Login</button>
                <p>Don't have an account? <a href="#"> click here to sign up</a></p><br /><br /><br />
            </form>

        

    </div>
  )
}

export default Home