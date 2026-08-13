import React, { useState } from 'react'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'
import CustomerDashboard from './CustomerDashboard'
import BankerDashboard from './BankerDashboard'

const App = () => {

  const [logger, setLogger] = useState(null)

  const handleAdd = (e) => {
    console.log("Add Button Clicked..")
    setLogger(e)
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-blue-200">

      <Routes>
        <Route path='/customerDashboard' element={<CustomerDashboard />} />
        <Route path='/bankerDashboard' element={<BankerDashboard />} />
      </Routes>
      {/* Bank Name */}
      <h1
        className="text-5xl text-blue-900 font-bold tracking-wider"
        style={{ fontFamily: "Cinzel, serif" }}
      >
        🏦 Hello BANK OF INDIA
      </h1>

      <p className="text-gray-700 text-lg mb-8 italic">
        ₹ Trusted Banking for Every Indian ₹
      </p>

      {/* Money Icons */}
      <div className="text-5xl mb-8">
        💰 💵 ₹ 🪙 💳
      </div>

      {/* Button */}
      <button
        onClick={() => handleAdd('cust')}
        className="
          px-8 py-3
          bg-blue-700
          text-white
          text-lg
          font-semibold
          rounded-lg
          shadow-lg
          hover:bg-blue-800
          hover:shadow-xl
          active:scale-95
          transition-all
          duration-300
        "
      >
        Login as a Customer
      </button> <br />

      <button
        onClick={() => handleAdd('banker')}
        className="
          px-8 py-3
          bg-blue-700
          text-white
          text-lg
          font-semibold
          rounded-lg
          shadow-lg
          hover:bg-blue-800
          hover:shadow-xl
          active:scale-95
          transition-all
          duration-300
        "
      >
        Login as a Banker
      </button>

      {
        logger && (
          <>
            <Login konlogin={logger} />
          </>
        )
      }

    </div>
  )
}

export default App