import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import Hero from './components/hero/Hero'
import LoginPage from './components/login/LoginPage'
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
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  )
}

export default App
