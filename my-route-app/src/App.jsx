import { Profiler, useState } from 'react'

import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from './Pages/Homepage'
import Mobile from './Pages/Mobile'
import Fashion from './Pages/Fashion'
import Login from './Pages/Login'
import Navbar from './Components/Navbar'
import ProtectedRoute from './ProtectedRoute'
import Dashboard from './Pages/Dashboard'
import Profile from './Pages/Profile'
import Settings from './Pages/Settings'


function App() {
  const userData = localStorage.getItem('usr')
  
    const navigateMe = useNavigate() ;
    const handleLogout = () =>{
        localStorage.removeItem('usr')
        navigateMe('/login')
    }

  

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      
      <Route path='fashion' element= {<Fashion/>}/>
      <Route path='login' element= {<Login/>}/>
      <Route path='mobiles' element= {<Mobile/>}/>
      
      <Route element={<ProtectedRoute/>}>
         <Route path='dashboard' element= {<Dashboard/>}/>
         <Route path='profile' element= {<Profile/>}/>
         <Route path='settings' element= {<Settings/>}/>
      </Route>


    </Routes>
    {
          userData && (
            <>
            <button onClick={handleLogout}>Logout</button> <br /><br />
            </>
          )
        }
      
    </>
  )
}

export default App
