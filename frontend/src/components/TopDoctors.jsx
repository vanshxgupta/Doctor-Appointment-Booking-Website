import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="mt-20 px-6">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-blue-800">
        Top Doctors To Book
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 justify-items-center">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${item._id}`)}
            className={`group w-full max-w-xs p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border-2 cursor-pointer ${
              item.availability ? 'border-green-500' : 'border-red-500'
            }`}
          >
            {/* Doctor Image */}
            <img
              src={item.image}
              alt={item.name}
              className="group-hover:-translate-y-2 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover mb-4 transition-transform duration-300"
            />
            {/* Doctor Name */}
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
            {/* Doctor Specialty */}
            <p className="text-sm text-gray-600">{item.speciality}</p>
            {/* Availability Status */}
            <div className="mt-2 flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${
                  item.availability ? 'bg-green-500' : 'bg-red-500'
                }`}
              ></span>
              <p className="text-sm text-gray-600">
                {item.availability ? 'Available' : 'Not Available'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* More Button */}
      <div className="flex justify-center items-center w-full mt-8">
        <button
          onClick={() => {
            navigate('/doctors');
            scrollTo(0, 0);
          }}
          className="py-2 px-6 font-medium text-white bg-blue-800 hover:bg-blue-700 rounded-lg transition-all duration-300"
        >
          More
        </button>
      </div>
    </div>
  );
};

export default TopDoctors;