import React from 'react'

function RegisterTable(props) {
  return (
    <div className="move-table"> 
    <table className="books-table login-form">
   <tr className='rows'>
     <th>Book title</th>
     <th>Book Author</th>
     <th>ISBN No.</th>
     <th>Available copies</th>
     
   </tr>

   <tr className='rows'>
     <td>{props.bookName}</td>
     <td>{props.author}</td>
     <td>{props.ISBN}</td>
     <td>{props.copiesAvailable}</td>
   </tr>

   {}
   
   
 </table>
</div>
  )
}

export default RegisterTable