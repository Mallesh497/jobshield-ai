import Navbar from "../components/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function PostJob() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    salary: "",
    description: "",
    email: "",
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      await axios.post(
        `${import.meta.env.VITE_API_URL}/jobs`,
        formData
      );

      alert("Job Posted Successfully");
      navigate("/");
      window.location.reload();


      setFormData({
        title: "",
        company: "",
        location: "",
        salary: "",
        description: "",
        email: "",
      });

    } catch (error) {

      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-10">  
      <Navbar/>

      <h1 className="text-4xl font-bold mb-8">
        Post a Job 
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl space-y-5"
      >

        <input
          type="text"
          name="title"
          placeholder="Job Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-4 rounded bg-gray-900 border border-gray-700"
        />

        <input
          type="text"
          name="company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          className="w-full p-4 rounded bg-gray-900 border border-gray-700"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-4 rounded bg-gray-900 border border-gray-700"
        />

        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={formData.salary}
          onChange={handleChange}
          className="w-full p-4 rounded bg-gray-900 border border-gray-700"
        />

        <textarea
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-4 rounded bg-gray-900 border border-gray-700 h-40"
        />

        <input
          type="email"
          name="email"
          placeholder="Recruiter Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded bg-gray-900 border border-gray-700"
        />

        <button
          type="submit"
          className="bg-blue-600 px-6 py-3 rounded font-bold hover:bg-blue-500"
        >
          Post Job
        </button>

      </form>

    </div>
  );
}

export default PostJob;