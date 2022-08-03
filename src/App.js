import Navbar from "./components/Navbar.js"
import {Routes,Router, Route} from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register.js";
import Loan from "./components/Loan.js";
import Return from "./components/Return.js";
import React from "react";
import Signup from "./components/Signup.js";
function App() {

  const [loanBooks, setLoanBooks] = React.useState()
  console.log(loanBooks)
  return ( 
    <div>


      <Navbar />
      

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Register' element={<Register passBook ={book=>setLoanBooks(book)}/>} />
          <Route path='/Loan' element={<Loan bookInfo={loanBooks}/>} />
          <Route path='/Return' element={<Return/>} />
          <Route path='/Signup' element={<Signup/>}/>
        </Routes>


      
      {/* <Signup /> */}
    
    </div>

   
  );
  
}

export default App;
