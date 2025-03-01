import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Register from "./components/register"
import Users from "./components/user"

function App() {
 
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </BrowserRouter>
       
    </>
  )
}

export default App