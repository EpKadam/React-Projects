import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";

const ShowHotelData = () => {
  const [allHotels, setAllHotels] = useState([]);

  const [form, setForm] = useState({
    id: "",
    guestName: "",
    roomNumber: "",
    roomType: "",
    checkInDate: "",
    checkOutDate: "",
    phoneNumber: "",
    totalAmount: "",
  });

  const [search, setSearch] = useState("");

  const loadHotels = async () => {
    const { data } = await axios.get("http://localhost:8080/bookings");
    setAllHotels(data);
  };

  useEffect(() => {
    loadHotels();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.id) {
      await axios.put("http://localhost:8080/bookings", form);
    } else {
      await axios.post("http://localhost:8080/bookings", form);
    }

    setForm({
      id: "",
      guestName: "",
      roomNumber: "",
      roomType: "",
      checkInDate: "",
      checkOutDate: "",
      phoneNumber: "",
      totalAmount: "",
    });

    loadHotels();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/bookings/${id}`);
    loadHotels();
  };

  const editHotel = (hotel) => {
    setForm(hotel);
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10">

        <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-xl p-8">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-10">
            Hotel Management System
          </h1>

          {/* Form */}

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >

            <div>
              <label className="block mb-2 font-semibold">
                Guest Name
              </label>

              <input
                type="text"
                name="guestName"
                value={form.guestName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Room Number
              </label>

              <input
                type="number"
                name="roomNumber"
                value={form.roomNumber}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Room Type
              </label>

              <input
                type="text"
                name="roomType"
                value={form.roomType}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Phone Number
              </label>

              <input
                type="text"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Check In Date
              </label>

              <input
                type="date"
                name="checkInDate"
                value={form.checkInDate}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Check Out Date
              </label>

              <input
                type="date"
                name="checkOutDate"
                value={form.checkOutDate}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">
                Total Amount
              </label>

              <input
                type="number"
                name="totalAmount"
                value={form.totalAmount}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                {form.id ? "Update Booking" : "Add Booking"}
              </button>
            </div>

          </form>

          {/* Search */}

          <div className="mt-10 mb-6 flex justify-end">

            <input
              type="text"
              placeholder="Search by Guest Name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="border rounded-lg p-3 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

          </div>

          {/* Table */}

          <div className="overflow-x-auto rounded-lg shadow">

            <table className="w-full">

              <thead className="bg-blue-600 text-white">

                <tr>

                  <th className="p-4">Guest Name</th>
                  <th className="p-4">Room No</th>
                  <th className="p-4">Room Type</th>
                  <th className="p-4">Check In</th>
                  <th className="p-4">Check Out</th>
                  <th className="p-4">Phone</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Update</th>
                  <th className="p-4">Delete</th>

                </tr>

              </thead>

              <tbody>

                {allHotels
                  .filter((hotel) =>
                    hotel.guestName
                      .toLowerCase()
                      .includes(search.toLowerCase())
                  )
                  .map((hotel) => (

                    <tr
                      key={hotel.id}
                      className="text-center border-b hover:bg-gray-100"
                    >

                      <td className="p-4">{hotel.guestName}</td>
                      <td className="p-4">{hotel.roomNumber}</td>
                      <td className="p-4">{hotel.roomType}</td>
                      <td className="p-4">{hotel.checkInDate}</td>
                      <td className="p-4">{hotel.checkOutDate}</td>
                      <td className="p-4">{hotel.phoneNumber}</td>
                      <td className="p-4 font-semibold text-green-600">
                        ₹ {hotel.totalAmount}
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() => editHotel(hotel)}
                          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition"
                        >
                          Update
                        </button>
                      </td>

                      <td className="p-4">
                        <button
                          onClick={() => handleDelete(hotel.id)}
                          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition"
                        >
                          Delete
                        </button>
                      </td>

                    </tr>

                  ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>
    </>
  );
};

export default ShowHotelData;