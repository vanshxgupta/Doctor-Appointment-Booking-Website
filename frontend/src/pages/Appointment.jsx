import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Appointment = () => {

  const { docId } = useParams();
  console.log(docId)
  const { doctors } = useContext(AppContext);

  const [docinfo, setDocinfo] = useState(null);

  const fetchDocinfo = () => {
    const foundDoctor = doctors.find((doc) => String(doc._id) === String(docId));
    setDocinfo(foundDoctor);
    console.log(foundDoctor);
  };

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      fetchDocinfo();
    }
  }, [doctors, docId]);

  if (!docinfo) {
    return <p>Doctor not found.</p>;
  }

  return (
    <>
    <Navbar/>
    <div className="min-h-screen flex flex-col items-center justify-start p-4">

      <div className=" h-fit space-x-10 flex flex-col md:flex-row rounded-xl shadow-md p-4 w-10/12 justify-between">
        {/* Left */}
        <div className=" bg-blue-500 rounded-xl w-1/4  flex justify-center items-center">
          <img
            src={docinfo.image} 
            alt={docinfo.name} 
            className=" h-fit rounded-lg object-bottom" 
          />
        </div>

        {/* Right */}
        <div className="w-3/4 border-1 border-gray-400 rounded-xl flex flex-col justify-center p-4">
          <h1 className="text-xl font-bold mb-1">{docinfo.name}</h1>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700 mb-1">{docinfo.degree} - {docinfo.speciality}</span>
            <span className="text-gray-700 text-sm rounded-4xl border border-gray-300 px-2">{docinfo.experience}</span>
          </div>
          <div className="my-2">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <p className="text-gray-600">{docinfo.about}</p>
          </div>
          <p className="text font-semibold text-blue-600">Appointment Fee: ${docinfo.fees}</p>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p className="text-gray-700">{docinfo.address.line1}</p>
            <p className="text-gray-700">{docinfo.address.line2}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Appointment;