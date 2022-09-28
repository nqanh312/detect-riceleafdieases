import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import NavbarSign from './components/NavbarSign'
import HomePage from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Admin from './pages/Admin'


import { userInputs } from "./formSource";
import { useContext } from "react";

import Sidebar from './components/admin/sidebar/Sidebar'
import Home from './pages/adminpage/home/Home'
import List from './pages/adminpage/list/List'
import New from './pages/adminpage/new/New'
import Single from './pages/adminpage/single/Single'
import MapDisease from './pages/adminpage/MapDisease'
import ListDiseases from './pages/adminpage/ListDiseases'
import ListDetect from './pages/adminpage/ListDetect'
import Report from './pages/adminpage/Report'



import React, { useState } from 'react'
// import { Link, animateScroll as scroll } from 'react-scroll'

import { FiMenu } from 'react-icons/fi'
import { CgClose } from 'react-icons/cg'

import axios from 'axios';



function App() {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  const handleClose = () => setNav(!nav)

  const [returnedData, setReturnedData] = useState(['hello']);
  const [disease, setDisease] = useState({ Name: '', Symptom: '', Treatment: '', Prevention: '', SymptomEn: '', TreatmentEn: '', PreventionEn: '' })

  const setInput = (e) => {
    const { name, value } = e.target;
    console.log(value);

    setDisease(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  // const fetchData = async () => {
  //   console.log(disease);
  //   const newData = await fetch('/api', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       name: disease.Name
  //     })
  //   })
  //     .then(res => res.json())
  //   console.log(newData);
  //   setReturnedData(newData[0])
  // }

  // const createDisease = async () => {
  //   const newData = await fetch('/hello', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       ...disease
  //     })
  //   })
  //     .then(res => res.json())
  //   console.log(newData);
  //   setReturnedData(newData[0])
  // }

  const API_endpoint = `https://api.openweathermap.org/data/2.5/weather?`;
  const API_key = `f864d85cf435deaa05c43a852d1d854c`

  const [latitude, setLatitude] = React.useState('');
  const [longitude, setLongitude] = React.useState('');
  const [responseData, setResponseData] = React.useState({})
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })

    // console.log(`${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly, daily&appid=${API_key}`)
    let finalAPIEndPoint = `${API_endpoint}lat=${latitude}&lon=${longitude}&exclude=hourly, daily&appid=${API_key}`
    // console.log(finalAPIEndPoint)
    axios.get(finalAPIEndPoint)
      .then((response) => {
        setResponseData(response.data)
        console.log(response.data)
      })

  }, [])


  return (
    <>
      <div className='App'>
        <h1>{responseData.main.temp}</h1>
        <h1>{responseData.coord.lon}</h1>
        <h1>{responseData.coord.lat}</h1>
      </div>
      

      {/* <div className="App">
        <input name="Name" placeholder='Name' onChange={setInput}></input>
        <input name="Symptom" placeholder='Symptom' onChange={setInput}></input>
        <input name="Treatment" placeholder='Treatment' onChange={setInput}></input>
        <input name="Prevention" placeholder='Prevention' onChange={setInput}></input>
        <input name="SymptomEn" placeholder='SymptomEn' onChange={setInput}></input>
        <input name="TreatmentEn" placeholder='TreatmentEn' onChange={setInput}></input>
        <input name="PreventionEn" placeholder='PreventionEn' onChange={setInput}></input>
        <button onClick={() => fetchData()}>Click</button>
        <button onClick={() => createDisease()}>Create</button>
        <p>Name: {returnedData.name}</p>
        <p>Symptom: {returnedData.symptom}</p>
        <p>Treatment: {returnedData.treatment}</p>
        <p>Prevention: {returnedData.prevention}</p>
        <p>SymptomEn: {returnedData.symptomEn}</p>
        <p>TreatmentEn: {returnedData.treatmentEn}</p>
        <p>PreventionEn: {returnedData.preventionEn}</p>
      </div> */}


      {/* <div className='z-20 w-screen h-[80px] bg-white fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold mr-4 sm:text-4xl'><Link className="cursor-pointer" to="home" smooth={true} duration={500}>AcademicKnights</Link></h1>
          </div>
          <div className='hidden md:flex pr-4'>
            <button className='border-none bg-transparent text-black mr-4'><Link className="cursor-pointer" to="login" smooth={true} duration={0}>Sign In</Link></button>
            <button className='px-8 py-3'><Link className="cursor-pointer" to="signup" smooth={true} duration={0}>Sign Up</Link></button>
          </div>
          <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <FiMenu className='w-5 cursor-pointer' /> : <CgClose className='w-5 cursor-pointer' />}
          </div>
        </div>

        <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
          <div className='flex flex-col my-4 md:hidden'>
            <button className='px-8 py-3 mb-4 bg-transparent text-green-900 border-green-900 hover:border-green-600'><Link className="cursor-pointer" to="login" smooth={true} duration={0}>Sign In</Link></button>
            <button className='px-8 py-3'><Link className="cursor-pointer" to="signup" smooth={true} duration={0}>Sign Up</Link></button>
          </div>
        </ul>
      </div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes> */}




    </>
  );
}

export default App;
