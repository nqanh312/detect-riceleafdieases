import { Routes, Route, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Detect from '../components/Detect'
import Footer from '../components/Footer'




function Home() {
  return (
    <>
      {/* <Navbar/> */}
      <Hero />
      <About />
      <Detect />
      <Footer />
    </>
  );
}

export default Home;
