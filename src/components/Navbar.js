import React from 'react'
import Logo from "./logoC.png"
import {Route, Router} from "react-router-dom"
function Navbar() {
  return (
    
    <div className='Navbar'>
      <div className="logo-all">

       <img className='logo' src={Logo} width="50px"  alt="" />
       <h1 className="logo-text">LMS</h1>

      </div>
      <ul className='Navbar-links'>
        <li><a  className="nav-links" href="/">Home</a></li>
        <li><a className="nav-links" href="/Register">Register Books</a></li>
        <li><a className="nav-links" href="/Loan">Loan Books</a></li>
        <li><a className="nav-links" href="/Return">Return Books</a></li>
      </ul>
        
        

       
      
    </div>

    
  )
}

export default Navbar
