import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./component/protectedRoute";

function App() {

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <BrowserRouter>

        <Routes >

        <Route path="/" element={
                  <ProtectedRoute>
                          <Home />  
                  </ProtectedRoute> } 
        />
        <Route path="/login" element = {<LogIn />}/>
        <Route path="/signup" element = {<Signup />}/>
        
        </Routes>

      </BrowserRouter>
       
    </>
  )
}

export default App
