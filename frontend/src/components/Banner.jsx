import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Banner = () => {
  return (
    <div className='mt-10 flex justify-center items-center w-full p-4'>
      <div className="relative flex flex-col md:flex-row items-center bg-gray-100 p-8 rounded-lg shadow-md w-10/12">
        <div className="text-center md:text-left mb-4 md:mb-0 flex-1">
          <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Platform</h1>
          <p className="text-lg text-gray-600 mb-6">Join us to book appointments with top doctors conveniently.</p>
          <button className="py-2 px-4 font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-lg">Create Account</button>
        </div>
        <div className="flex justify-center md:justify-end flex-1">
          <img 
            src={assets.appointment_img} 
            alt="Healthcare " 
            className="w-64 md:w-80 object-cover rounded-lg" 
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
