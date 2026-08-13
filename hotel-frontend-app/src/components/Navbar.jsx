import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-700 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">

        <h1 className="text-3xl font-bold text-white">
          🏨 HotelMS
        </h1>

        <ul className="flex gap-8 text-white font-medium">
          <li className="cursor-pointer hover:text-yellow-300 transition">
            Dashboard
          </li>

          <li className="cursor-pointer hover:text-yellow-300 transition">
            Bookings
          </li>

          <li className="cursor-pointer hover:text-yellow-300 transition">
            Rooms
          </li>

          <li className="cursor-pointer hover:text-yellow-300 transition">
            Reports
          </li>
        </ul>

        <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">
          Admin
        </button>

      </div>
    </nav>
  );
};

export default Navbar;