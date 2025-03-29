import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginRegister = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const toggleForm = () => {
    setIsRegister(!isRegister);
    setFormData({ name: '', email: '', password: '' }); 
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
    console.log(isRegister ? 'Register Data:' : 'Login Data:', formData);
    alert(`Form submitted! Check the console for ${isRegister ? 'Register' : 'Login'} data.`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="min-h-screen flex flex-1 items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md border border-gray-300 transition-shadow hover:shadow-2xl">
          <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">
            {isRegister ? 'Register' : 'Login'}
          </h2>
          <p className="text-center text-gray-600 mb-4">
            {isRegister
              ? 'Register to book an appointment with our experienced doctors.'
              : 'Login to manage your appointments and profile.'}
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {isRegister && (
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
              />
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              {isRegister ? 'Register' : 'Login'}
            </button>
          </form>
          <p className="text-center text-gray-600 mt-4">
            {isRegister ? 'Already registered?' : 'Not registered yet?'}{' '}
            <span
              className="text-blue-500 cursor-pointer hover:underline hover:text-blue-700"
              onClick={toggleForm}
            >
              {isRegister ? 'Login' : 'Register'}
            </span>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginRegister;