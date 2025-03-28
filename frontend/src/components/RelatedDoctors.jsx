import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const RelatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();

  const filteredDoctors = doctors.filter(
    (item) => item.speciality === speciality && item._id !== docId
  );

  const handleNavigate = (id) => {
    navigate(`/appointment/${id}`);
  };

  return (
    <>
      <h2 className='mt-16 text-4xl font-bold text-center mb-6 text-blue-600'>Related Doctors</h2>
      <div className="mt-10 flex flex-wrap gap-6 justify-center">
        {filteredDoctors.slice(0, 5).map((item, index) => (
          <div
            key={index}
            className={`group w-40 sm:w-72 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border-2 cursor-pointer ${item.availability ? 'border-green-500' : 'border-red-500'}`}
            onClick={() => handleNavigate(item._id)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-60 w-60 rounded-full object-cover "
            />
            <div className="mt-4 text-center">
              <p className="font-semibold text-xl text-gray-800">{item.name}</p>
              <p className="text-gray-500 text-lg">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RelatedDoctors;
