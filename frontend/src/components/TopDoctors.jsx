import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const {doctors}=useContext(AppContext)

  return (
    <div className="mt-30 px-6">
      <h1 className="mt-20 text-3xl font-extrabold mb-6 text-center">Top Doctors To Book</h1>
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {doctors.slice(0, 10).map((item, index) => (
          <div 
            key={index} 
            onClick={() => navigate(`/doctors/${item._id}`)}
            className={`group w-40 sm:w-72 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border-2 cursor-pointer ${item.availability ? 'border-green-500' : 'border-red-500'}`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="group-hover:-translate-y-2 w-32 sm:w-45 h-48 sm:h-60 rounded-xl object-cover mb-4 transition-transform duration-300"
            />
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-sm text-gray-600">{item.speciality}</p>
            <div className="mt-2 flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full ${item.availability ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <p className="text-sm text-gray-600">{item.availability ? 'Available' : 'Not Available'}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center w-full">
        <button 
          onClick={()=>navigate('/doctors')}
          className="mt-6 py-2 px-4 font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-lg"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;