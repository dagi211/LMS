import React from 'react'
import {nanoid } from "nanoid"
const fs = require('fs')
function Register(props) {
  const [books, setBooks] = React.useState([])
  const [bookDetails, setBookDetails] = React.useState({
          bookName: "",
          author: '',
          ISBN: "",
          copiesAvailable: "",
  })


function handleFormChange(e){
  e.preventDefault()
  const fieldName = e.target.getAttribute('name');
  const fieldValues = e.target.value
  const newFormData = {...bookDetails}

  // const newBookDetails = {...bookDetails}
  newFormData[fieldName] = fieldValues

  setBookDetails(newFormData)


}

function handleFormSubmit(e) {
  e.preventDefault()

  const newBookDetails = {
    id: nanoid(),
    bookName: bookDetails.bookName,
    author: bookDetails.author,
    ISBN: bookDetails.ISBN,
    copiesAvailable: bookDetails.copiesAvailable
  }
  const table = [...books, newBookDetails];
  setBooks(table)
  


}

React.useEffect(()=>{
  localStorage.setItem("books", JSON.stringify(books))
},[books])

  return (
    
    <div className='container'>
        
    <form onSubmit={handleFormSubmit}  className='login-form loan-form register-mover'  action="">

        <h1 className="header">Register Books</h1>
        <hr />
     <div className="mover-reg">
        <input className='login-info' onChange = {handleFormChange}type="text"  name="bookName" placeholder='Insert book name' value={bookDetails.bookName}  />
        <input className='login-info' onChange = {handleFormChange}type="text"  name="author" placeholder='Insert Author' value={bookDetails.author}   />
        <input className='login-info' onChange = {handleFormChange}type="number"  name="ISBN" placeholder='Insert the ISBN number' value={bookDetails.ISBN} />
        <input className='login-info' onChange = {handleFormChange}type="number"  name="copiesAvailable" placeholder='Insert number of available copies' value={bookDetails.copiesAvailable}  />
     </div>
        
        
        
        <button type="submit"  className='btn'   >Register</button>
        
    </form>


    <div className="move-table"> 
    <table className="books-table login-form">
   <tr className='rows'>
     <th>Book title</th>
     <th>Book Author</th>
     <th>ISBN No.</th>
     <th>Available copies</th>
     
   </tr>


  
       {
       books.map(books => 

        (
         <tr className='rows'>
          <td>{books.bookName}</td>
          <td>{books.author}</td>
          <td>{books.ISBN}</td>
          <td>{books.copiesAvailable}</td>
         </tr>
       
       )
      


       )}


{/* <tr className='rows'>
          <td>{table.bookName}</td>
          <td>{table.author}</td>
          <td>{table.ISBN}</td>
          <td>{table.copiesAvailable}</td>
         </tr>
     
    */}

   
   
   
 </table>
</div>

    
   

  </div>

  )
}


export default Register