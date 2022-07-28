import Navbar from "./components/Navbar.js"
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Register from "./components/Register.js";
import Loan from "./components/Loan.js";
import Return from "./components/Return.js";
function App() {
  return ( 
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Loan' element={<Loan/>} />
        <Route path='/Return' element={<Return/>} />
      </Routes>
    
    </div>

   
  );
}

export default App;
