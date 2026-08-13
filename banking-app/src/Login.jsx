import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ konlogin }) => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const navigateMe = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (konlogin === 'banker') {

            const { data } = await axios.get('http://localhost:8080/bankers')

            const bankerFound = data.find((b) => b.email === form.email)

            if (bankerFound) {

                if (bankerFound.password === form.password) {
                    navigateMe('/bankerDashboard')
                } else {
                    alert('Incorrect Password')
                }

            } else {
                alert('Banker Does Not Exist')
            }

        } else {

            const { data } = await axios.get('http://localhost:8080/customers')

            const customerFound = data.find((c) => c.email === form.email)

            if (customerFound) {

                if (customerFound.password === form.password) {
                    navigateMe('/customerDashboard')
                } else {
                    alert('Incorrect Password')
                }

            } else {
                alert('Customer Does Not Exist')
            }
        }
    }

    return (
        <div className="mt-10 w-full flex justify-center">

            <div className="bg-white w-[420px] rounded-2xl shadow-2xl border border-blue-100 p-8">

                <div className="text-center mb-6">

                    <h2 className="text-3xl font-bold text-blue-900">
                        🏦 {konlogin === "banker" ? "Banker Login" : "Customer Login"}
                    </h2>

                    <p className="text-gray-500 mt-2">
                        {konlogin === "banker"
                            ? "Authorized Staff Access"
                            : "Access Your Bank Account"}
                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* Email */}

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address
                        </label>

                        <input
                            type="text"
                            name="email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.target.name]: e.target.value
                                })
                            }
                            placeholder="Enter your email"
                            required
                            className="
                            w-full
                            px-4
                            py-3
                            border
                            border-gray-300
                            rounded-lg
                            outline-none
                            focus:ring-2
                            focus:ring-blue-600
                            focus:border-blue-600
                            transition
                        "
                        />

                    </div>

                    {/* Password */}

                    <div>

                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="text"
                            name="password"
                            value={form.password}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    [e.target.name]: e.target.value
                                })
                            }
                            placeholder="Enter your password"
                            required
                            className="
                            w-full
                            px-4
                            py-3
                            border
                            border-gray-300
                            rounded-lg
                            outline-none
                            focus:ring-2
                            focus:ring-blue-600
                            focus:border-blue-600
                            transition
                        "
                        />

                    </div>

                    {/* Login Button */}

                    <button
                        type="submit"
                        className="
                        w-full
                        py-3
                        rounded-lg
                        bg-blue-700
                        hover:bg-blue-800
                        text-white
                        font-semibold
                        text-lg
                        shadow-lg
                        transition-all
                        duration-300
                        hover:scale-105
                        active:scale-95
                    "
                    >
                        🔐 Login
                    </button>

                </form>

                <div className="mt-6 text-center text-gray-500 text-sm">

                    {konlogin === "banker"
                        ? "🏢 Bank Employee Portal"
                        : "💳 Secure Customer Banking"}

                </div>

            </div>

        </div>
    )
}

export default Login