import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";

import { registerUser } from "../services/authService";

function Register() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const data = await registerUser(formData);

      localStorage.setItem(
        "token",
        data.token
      );

      alert("Registration Successful");
      navigate("/");
      window.location.reload();

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">

      <Navbar />

      <div className="flex items-center justify-center py-20">

        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 p-10 rounded-2xl w-full max-w-md border border-gray-800"
        >

          <h1 className="text-4xl font-bold mb-8">
            Register 
          </h1>

          <div className="space-y-5">

            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 rounded bg-gray-800 border border-gray-700"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 rounded bg-gray-800 border border-gray-700"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-4 rounded bg-gray-800 border border-gray-700"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 py-4 rounded font-bold hover:bg-blue-500"
            >
              Register
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default Register;