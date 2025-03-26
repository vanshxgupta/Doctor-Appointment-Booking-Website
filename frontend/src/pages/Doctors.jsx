import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AppContext } from '../context/AppContext';

const Doctors = () => {

  const { speciality } = useParams();
  const navigate = useNavigate();
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const { doctors } = useContext(AppContext);

  const specialties = [
    'All Doctors',
    'General Physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ];

  useEffect(() => {
    if (speciality && speciality.toLowerCase() !== specialties[0].toLowerCase()) {
      setFilteredDoctors(doctors.filter(doc => doc.speciality.toLowerCase() === speciality.toLowerCase()));
    } else {
      setFilteredDoctors(doctors);
    }
  }, [speciality, doctors]);

  const handleSpecialityClick = (spec) => {
    navigate(`/doctors/${spec.toLowerCase()}`);
  };

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-1/6 p-4 mt-10">
          <p className='mb-8 text-center font-bold text-gray-800'>Browse Through the Doctor's Specialties</p>
          {specialties.map((spec) => (
            <p 
              key={spec} 
              onClick={() => handleSpecialityClick(spec)}
              className={`border-2 cursor-pointer mb-2 p-2 rounded-lg transition-all duration-300 ${speciality === spec.toLowerCase() ? 'border-blue-500 bg-blue-100' : 'border-gray-300'} hover:border-blue-500 hover:bg-blue-100`}
            >
              {spec}
            </p>
          ))}
        </div>
        <div className="mx-10 w-3/4 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4">
          {filteredDoctors.length == 0 ? 
            <div className="my-45 mx-70 p-4flex justify-center items-center h-96 w-full">
              <p className="m-40 w-full text-2xl font-semibold text-gray-600">No Doctors Found</p>
            </div> 
            : (
            filteredDoctors.map((item, index) => (
              <div 
                key={index} 
                onClick={() => navigate(`/doctors/${item._id}`)}
                className={`group w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border-2 cursor-pointer ${item.availability ? 'border-green-500' : 'border-red-500'}`}
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
            )))
          }
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Doctors;
