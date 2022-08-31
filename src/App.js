import { Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarWeb from './components/NavbarWeb'
import NavbarSign from './components/NavbarSign'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'



function App() {
  return (
    <>
    <Navbar/>
    <Signup/>
    {/* <NavbarSign/> */}
    {/* <HomePage /> */}
    
      {/* <Navbar/>
      <Hero />
      <About />
      <Detect />
      <Footer /> */}
    </>
  );
}

export default App;
