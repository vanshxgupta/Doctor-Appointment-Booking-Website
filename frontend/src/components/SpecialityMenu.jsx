import React from 'react';
import { specialityData } from '../assets/assets_frontend/assets';
import { Link } from 'react-router-dom';

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="my-10 px-6">
      <h1 className="mt-20 text-3xl font-extrabold text-blue-800 mb-6 text-center">
        Find By Speciality
      </h1>

      <div className=" flex flex-wrap justify-center gap-6">
        {specialityData.map((item, index) => (
          <Link  to={`/doctors/${item.speciality}`} key={index} className="flex flex-col items-center group">
            <div className="bg-white p-3 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform group-hover:-translate-y-2 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 flex justify-center items-center">
              <img
                src={item.image}
                alt={item.speciality}
                className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full border-4 border-blue-200 transition-all duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="mt-2 text-base sm:text-lg font-semibold text-center">
              {item.speciality}
            </h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
