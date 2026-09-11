import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes >

        <Route path="/" element = {<Home />}/>
        <Route path="/login" element = {<LogIn />}/>
        <Route path="/signup" element = {<Signup />}/>
        
        </Routes>

      </BrowserRouter>
      
    </>
  )
}

export default App
