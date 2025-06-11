import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  return (
    <>
      <div className="container"> 
        <BrowserRouter>
          <Routes>
            <Route index element={<Home/>}/>
            <Route path="Team" element={<Team/>}/>
            <Route path="Contact" element={<Contact/>}/>
            <Route path="Login" element={<Login/>}/>
            <Route path="Register" element={<Register/>}/>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
