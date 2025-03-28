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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const specialties = [
    'All Doctors',
    'General Physician',
    'Gynecologist',
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist',
  ];

  useEffect(() => {
    if (speciality && speciality.toLowerCase() !== specialties[0].toLowerCase()) {
      setFilteredDoctors(doctors.filter((doc) => doc.speciality.toLowerCase() === speciality.toLowerCase()));
    } else {
      setFilteredDoctors(doctors);
    }
  }, [speciality, doctors]);

  const handleSpecialityClick = (spec) => {
    navigate(`/doctors/${spec.toLowerCase()}`);
    setIsSidebarOpen(false); // Close sidebar on smaller screens
  };

  return (
    <div>
      <Navbar />

      {/* Main Container */}
      <div className="flex flex-col md:flex-row">
        {/* Sidebar */}
        <div className="hidden md:block w-1/6 p-4 mt-10">
          <p className="mb-8 text-center font-bold text-gray-800">Browse Through the Doctor's Specialties</p>
          {specialties.map((spec) => (
            <p
              key={spec}
              onClick={() => handleSpecialityClick(spec)}
              className={`border-2 cursor-pointer mb-2 p-2 rounded-lg transition-all duration-300 ${
                speciality === spec.toLowerCase() ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
              } hover:border-blue-500 hover:bg-blue-100`}
            >
              {spec}
            </p>
          ))}
        </div>

        {/* Collapsible Sidebar for Small Screens */}
        <div className="md:hidden p-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="w-full bg-blue-500 text-white py-2 rounded-lg mb-4"
          >
            {isSidebarOpen ? 'Close Specialties' : 'Browse Specialties'}
          </button>
          {isSidebarOpen && (
            <div className="bg-gray-100 p-4 rounded-lg">
              {specialties.map((spec) => (
                <p
                  key={spec}
                  onClick={() => handleSpecialityClick(spec)}
                  className={`border-2 cursor-pointer mb-2 p-2 rounded-lg transition-all duration-300 ${
                    speciality === spec.toLowerCase() ? 'border-blue-500 bg-blue-100' : 'border-gray-300'
                  } hover:border-blue-500 hover:bg-blue-100`}
                >
                  {spec}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Doctors Grid */}
        <div className="mx-4 md:mx-10 w-full md:w-5/6 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDoctors.length === 0 ? (
            <div className="flex justify-center items-center h-96 w-full">
              <p className="text-2xl font-semibold text-gray-600">No Doctors Found</p>
            </div>
          ) : (
            filteredDoctors.map((item, index) => (
              <div
                key={index}
                onClick={() => navigate(`/appointment/${item._id}`)}
                className={`group w-full p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center border-2 cursor-pointer ${
                  item.availability ? 'border-green-500' : 'border-red-500'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="group-hover:-translate-y-2 w-32 sm:w-45 h-48 sm:h-60 rounded-xl object-cover mb-4 transition-transform duration-300"
                />
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-sm text-gray-600">{item.speciality}</p>
                <div className="mt-2 flex items-center gap-2">
                  <span
                    className={`w-3 h-3 rounded-full ${
                      item.availability ? 'bg-green-500' : 'bg-red-500'
                    }`}
                  ></span>
                  <p className="text-sm text-gray-600">{item.availability ? 'Available' : 'Not Available'}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Doctors;