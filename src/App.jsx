import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Hero from './components/hero/Hero'
import AdminRegister from "./components/Signup/AdminRegister";
import AdminLogin from "./components/login/AdminLogin";
import Navbar from './components/navbar/Navbar'
function App() {

  return (
   <Routes>
      {/* Home Route */}
      <Route path="/" element={
        <>
          <Navbar />
          <Hero />
        </>
      } />

      {/* Login Route */}
      <Route path="/admin-register" element={<AdminRegister />} />
      <Route path="/admin-login" element={<AdminLogin />} />
    </Routes>
  )
}

export default App
