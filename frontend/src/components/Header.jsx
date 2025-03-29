import React from 'react';
import { assets } from '../assets/assets_frontend/assets';

const Header = () => {
  return (
    <div >

    <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-10  bg-blue-200 rounded-xl shadow-md w-full md:w-11/12 mx-auto my-10">
      {/* Left Side */}
      <div className="w-full md:w-2/5 text-center md:text-left mt-6 md:mt-0">
        <h1 className="p-5  text-4xl sm:text-5xl font-extrabold text-blue-800 leading-snug">
          Book Appointment With Trusted Doctors
        </h1>

        <div className='my-5 '>
        <div className='flex justify-center items-center w-full md:w-20 mx-0 md:mx-6'> 
        <img className=' w-20' src={assets.group_profiles} alt="group-profiles" />
            </div>
        <p className="p-5 text-gray-600 text-lg">
          Get access to top healthcare professionals at your convenience.
        </p>  
        </div>

        <a href='#speciality' className=" cursor-pointer rounded-full bg-white text-black px-6 py-3 font-semibold shadow-md hover:shadow-lg hover:bg-gray-100 transition-all duration-300 ease-in-out ">
            Book Appointment
        </a>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-2/5 flex justify-center md:justify-end">
        <img
          loading="lazy"
          src={assets.header_img}
          alt="3 doctors"
          className="w-full h-auto object-cover rounded-2xl"
          />
      </div>


    </div>


    </div>
  );
};

export default Header;