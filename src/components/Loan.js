import React from 'react'
import { nanoid } from 'nanoid';
function Loan() {

const [loanData, setLoanData] = React.useState(
  JSON.parse(localStorage.getItem("books")) || []
)


const [loans, setLoans] = React.useState([])
const [loanDetails, setLoanDetails] = React.useState({
        bookName: "",
        loaner: '',
        phone: '',
        loanDate: "",
        returnDate: "",
})

function handleFormChange(e){
  e.preventDefault()
  const fieldName = e.target.getAttribute('name');
  const fieldValues = e.target.value
  const newFormData = {...loanDetails}

  // const newBookDetails = {...bookDetails}
  newFormData[fieldName] = fieldValues

  setLoanDetails(newFormData)


}

function handleFormSubmit(e) {
  e.preventDefault()

  const newLoanDetails = {
    id: nanoid(),
    bookName: loanDetails.bookName,
    loaner: loanDetails.loaner,
    phone: loanDetails.phone,
    loanDate: loanDetails.loanDate,
    returnDate: loanDetails.returnDate,
  }
  const table = [...loans, newLoanDetails];
  setLoans(table)
  


}





  
  return (
    <div className='container'>
        
    <form onSubmit={handleFormSubmit} className='login-form loan-form register-mover' action="">
        <h1 className="header">Loan Books</h1>
        <hr />
     <div className="mover-reg">

       
       <select className='login-info' value={loanDetails.bookName} name="bookName" onChange={handleFormChange} id="">
         <option name="bookName">select book to be loaned</option>
         {loanData.map(book=>(
           <option  >{book.bookName}</option>
         ))}
         {/* <option value="id">{loanData.bookName}</option> */}
       </select>
        {/* <input className='login-info' type="text" name="Name" placeholder='Insert name of the book to be loaned' /> */}
        <input className='login-info' onChange={handleFormChange}type="text" name="loaner" placeholder='Insert name of loaner'  value={loanDetails.loaner}/>
        <input className='login-info' onChange={handleFormChange}type="text" name="phone" placeholder='Insert phone no.' value={loanDetails.phone}/>
        <input className='login-info' onChange={handleFormChange}type="date" name="loanDate" placeholder='Insert loan date' value={loanDetails.loanDate}/>
        <input className='login-info' onChange={handleFormChange}type="date" name="returnDate" placeholder='Insert return date' value={loanDetails.returnDate}/>

     </div>
        
        

        <button type="submit" className='btn btn-loan'>Loan</button>
        
    </form>
    

    <div className="move-table"> 
    <table className="books-table login-form loan-table">
   <tr className='rows'>
     <th>Book title</th>
     <th>Name of loaner</th>
     <th>phone no.</th>
     <th>Loan Date</th>
     <th>Return Date</th>
     
   </tr>

   {
       loans.map(loan => 

        (
         <tr className='rows'>
          <td>{loan.bookName}</td>
          <td>{loan.loaner}</td>
          <td>{loan.phone}</td>
          <td>{loan.loanDate}</td>
          <td>{loan.returnDate}</td>
         </tr>
       
       )
      


       )}


  
   
   
 </table>
</div>


</div>
  )
}


export default Loan