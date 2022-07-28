import React from 'react'

function Return() {
  return (
    <div className='container'>
        
    <form className='login-form' action="">
        <h1 className="header">Return Books</h1>
        <hr />
     <div className="mover-reg">
        <input className='login-info' type="text" name="Name" placeholder='Insert name of the book to be Returned' />
        <input className='login-info' type="text" name="LoanedTo" placeholder='Insert name of loaner' />
        <input className='login-info' type="date" name="ReturnDate" placeholder='Insert return date'/>

     </div>
        
        

        <button className='btn btn-loan'>Loan</button>
        
    </form>



</div>
  )
}

export default Return