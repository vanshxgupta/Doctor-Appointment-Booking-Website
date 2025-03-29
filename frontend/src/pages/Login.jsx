import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { AppContext } from "../context/AppContext";

const LoginRegister = () => {
  const { settoken } = useContext(AppContext);
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({ name: "", email: "", password: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (isRegister && (formData.name.trim() === "" || formData.email.trim() === "" || formData.password.trim() === "")) ||
      (!isRegister && (formData.email.trim() === "" || formData.password.trim() === ""))
    ) {
      alert("All fields are required");
      return;
    }

    console.log(isRegister ? "Register Data:" : "Login Data:", formData);
    settoken(true);
    alert(`✅ Form submitted! Check the console for ${isRegister ? "Register" : "Login"} data.`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white p-6 sm:p-10 rounded-2xl shadow-lg w-full max-w-md border border-gray-300 transition-shadow hover:shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-blue-800 flex items-center justify-center gap-2">
            {isRegister ? "Register" : "Login"}
          </h2>
          <p className="text-center text-gray-600 mb-4 text-sm sm:text-base">
            {isRegister
              ? "Register to book an appointment with our experienced doctors."
              : "Login to manage your appointments and profile."}
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {isRegister && (
              <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm focus-within:ring-4 focus-within:ring-blue-300">
                <span className="material-symbols-outlined text-gray-400 mr-2">
                  person
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full focus:outline-none"
                />
              </div>
            )}
            <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm focus-within:ring-4 focus-within:ring-blue-300">
              <span className="material-symbols-outlined text-gray-400 mr-2">
                mail
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full focus:outline-none"
              />
            </div>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm focus-within:ring-4 focus-within:ring-blue-300">
              <span className="material-symbols-outlined text-gray-400 mr-2">
                lock
              </span>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              {isRegister ? "Register" : "Login"}
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4 text-sm sm:text-base">
            {isRegister ? "Already registered?" : "Not registered yet?"} {" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline hover:text-blue-700"
              onClick={toggleForm}
            >
              {isRegister ? "Login" : "Register"}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginRegister;