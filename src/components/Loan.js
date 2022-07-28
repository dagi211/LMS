import React from 'react'

function Loan() {
  return (
    <div className='container'>
        
    <form className='login-form loan-form' action="">
        <h1 className="header">Loan Books</h1>
        <hr />
     <div className="mover-reg">
        <input className='login-info' type="text" name="Name" placeholder='Insert name of the book to be loaned' />
        <input className='login-info' type="text" name="LoanedTo" placeholder='Insert name of loaner' />
        <input className='login-info' type="text" name="LoanerPhone" placeholder='Insert phone no.'/>
        <input className='login-info' type="date" name="LoanDate" placeholder='Insert loan date'/>
        <input className='login-info' type="date" name="ReturnDate" placeholder='Insert return date'/>

     </div>
        
        

        <button className='btn btn-loan'>Loan</button>
        
    </form>



</div>
  )
}

export default Loan