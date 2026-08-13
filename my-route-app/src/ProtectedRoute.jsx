import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    const isLoggedin = localStorage.getItem("usr"); 

  return isLoggedin  ? <Outlet/> : <Navigate to='/login'/>
}

export default ProtectedRoute