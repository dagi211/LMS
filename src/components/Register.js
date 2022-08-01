import React from 'react'
// import RegisterTable from './registerTable'
// import RegisterTable from './RegisterTable'

function Register() {
  const [bookDetails, setBookDetails] = React.useState([{
          bookName: "",
          author: '',
          ISBN: "",
          copiesAvailable: "",
  }])
 

const [table, setTable] = React.useState(
  [{
    bookName: "",
    author: '',
    ISBN: "",
    copiesAvailable: "",
}]
)

  function saveBooks(){
    setTable(
      {
        bookName:bookDetails.bookName,
        author:bookDetails.author,
        ISBN: bookDetails.ISBN,
        copiesAvailable: bookDetails.copiesAvailable,
  
      }
    )
  }


  //   const td = table.map((data)=>{
  //   return(
  //     `<tr className='rows'>
  //     <td>{table.bookName}</td>
  //     <td>{table.author}</td>
  //     <td>{table.ISBN}</td>
  //     <td>{table.copiesAvailable}</td>
  //   </tr>`
      
  //   )
  // })

  function trackName(e){

    setBookDetails(prevDetails=>{
      return (
        {
          ...prevDetails,
          bookName: e.target.value 
        }
      )
    
    })
  
  }


  function trackAuthor(e){

    setBookDetails(prevDetails=>{
      return (
        {
          ...prevDetails,
          author: e.target.value 
        }
      )
    
    })
  
  }
 

  function trackISBN(e){

    setBookDetails(prevDetails=>{
      return (
        {
          ...prevDetails,
          ISBN: e.target.value 
        }
      )
    
    })
  
  }


  function trackCopies(e){

    setBookDetails(prevDetails=>{
      return (
        {
          ...prevDetails,
          copiesAvailable: e.target.value 
        }
      )
    
    })
  
  }


 

  return (
    
    <div className='container'>
        
    <form className='login-form loan-form register-mover'  action="">

        <h1 className="header">Register Books</h1>
        <hr />
     <div className="mover-reg">
        <input className='login-info' type="text" name="Email" placeholder='Insert book name' value={bookDetails.bookName} onChange={trackName} />
        <input className='login-info' type="text" name="Email" placeholder='Insert Author' value={bookDetails.author} onChange={trackAuthor}  />
        <input className='login-info' type="text" name="ISBN" placeholder='Insert the ISBN number' value={bookDetails.ISBN} onChange={trackISBN}/>
        <input className='login-info' type="text" name="Amount" placeholder='Insert number of available copies' value={bookDetails.copiesAvailable} onChange={trackCopies} />
     </div>
        
        
        
        <button type="button" onClick={saveBooks} className='btn'  >Register</button>
        
    </form>


    <div className="move-table"> 
    <table className="books-table login-form">
   <tr className='rows'>
     <th>Book title</th>
     <th>Book Author</th>
     <th>ISBN No.</th>
     <th>Available copies</th>
     
   </tr>


  <tr className='rows'>
       <td>{table.bookName}</td>
       <td>{table.author}</td>
       <td>{table.ISBN}</td>
       <td>{table.copiesAvailable}</td>
     </tr>
   

   
   
   
 </table>
</div>

    
   

  </div>

  )
}

export default Register