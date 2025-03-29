import React, { useEffect, useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);

  const [docinfo, setDocinfo] = useState(null);
  const [docslots, setDocslots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(0);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const fetchDocinfo = () => {
    if (!doctors || doctors.length === 0) {
      console.error("Doctors array is empty or undefined.");
      return;
    }

    const foundDoctor = doctors.find((doc) => String(doc._id) === String(docId));
    if (!foundDoctor) {
      console.error("No doctor found with the given ID.");
      return;
    }

    setDocinfo(foundDoctor);
  };

  const getAvailableSlots = () => {
    let today = new Date();
    let slots = [];

    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let morningSlots = [];
      let eveningSlots = [];

      let now = new Date();
      now.setHours(now.getHours() + 1, 0, 0, 0);

      let morningStart = new Date(currentDate);
      morningStart.setHours(9, 0, 0, 0);

      let morningEnd = new Date(currentDate);
      morningEnd.setHours(12, 0, 0, 0);

      let eveningStart = new Date(currentDate);
      eveningStart.setHours(17, 0, 0, 0);

      let eveningEnd = new Date(currentDate);
      eveningEnd.setHours(21, 0, 0, 0);

      let currentTime = new Date(morningStart);
      while (currentTime < morningEnd) {
        if (currentTime > now) {
          let formattedTime = currentTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
          morningSlots.push({ datetime: new Date(currentTime), time: formattedTime });
        }
        currentTime.setMinutes(currentTime.getMinutes() + 30);
      }

      currentTime = new Date(eveningStart);
      while (currentTime < eveningEnd) {
        if (currentTime > now) {
          let formattedTime = currentTime.toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
          });
          eveningSlots.push({ datetime: new Date(currentTime), time: formattedTime });
        }
        currentTime.setMinutes(currentTime.getMinutes() + 30);
      }

      slots.push({ morning: morningSlots, evening: eveningSlots });
    }

    setDocslots(slots);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      alert(`Appointment booked for ${selectedSlot.time}`);
    } else {
      alert('Please select a time slot');
    }
  };

  useEffect(() => {
    if (doctors && doctors.length > 0) {
      fetchDocinfo();
    }
  }, [doctors, docId]);

  useEffect(() => {
    if (docinfo) {
      getAvailableSlots();
    }
  }, [docinfo]);

  if (!docinfo) {
    return <p>Doctor not found. Please check the doctor ID or try again later.</p>;
  }

  return (
    <>
      <Navbar />

      {/* Profile Banner Section */}
      <div className="min-h-screen flex flex-col items-center justify-start p-4">
        <div className="h-fit flex flex-col md:flex-row rounded-xl shadow-md p-4 w-full sm:w-10/12 justify-between gap-6">
          <div className="bg-blue-500 rounded-xl w-full md:w-1/4 flex justify-center items-center">
            <img src={docinfo.image} alt={docinfo.name} className="h-48 w-48 md:h-auto md:w-auto rounded-lg object-cover" />
          </div>

          <div className="w-full md:w-3/4 border border-gray-400 rounded-xl flex flex-col justify-center p-4">
            <h1 className="text-xl font-bold mb-1">{docinfo.name}</h1>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700 mb-1">{docinfo.degree} - {docinfo.speciality}</span>
              <span className="text-gray-700 text-sm rounded-full border border-gray-300 px-2">{docinfo.experience}</span>
            </div>
            <div className="my-2">
              <h2 className="text-xl font-semibold mb-2">About</h2>
              <p className="text-gray-600">{docinfo.about}</p>
            </div>
            <p className="font-semibold text-blue-600">Appointment Fee: ${docinfo.fees}</p>
            <div className="mt-4">
              <h2 className="text-xl font-semibold mb-2">Address</h2>
              <p className="text-gray-700">{docinfo.address.line1}</p>
              <p className="text-gray-700">{docinfo.address.line2}</p>
            </div>
          </div>
        </div>

        {/* Booking Appointment Section */}
        <div className="mt-6 w-full sm:w-10/12">
          <h2 className="text-2xl font-semibold mb-4 text-center">Book an Appointment</h2>

          {/* Date Selection */}
          <div className=" grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 gap-2 mb-4">
            {docslots.map((_, idx) => (
              <button
                key={idx}
                className={`p-2 rounded-lg ${selectedDate === idx ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedDate(idx)}
              >
                {new Date(new Date().setDate(new Date().getDate() + idx)).toLocaleDateString('en-US', {
                  weekday: 'short',
                  day: 'numeric',
                })}
              </button>
            ))}
          </div>

          {/* Morning Slots */}
          <h3 className="text-xl font-semibold">Morning Slots</h3>
          <div className="flex gap-2 sm:gap-4 mt-2 overflow-x-scroll scrollbar-hide ">
            {docslots[selectedDate]?.morning?.map((slot, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg ${selectedSlot === slot ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot.time}
              </button>
            ))}
          </div>

          {/* Evening Slots */}
          <h3 className="text-xl font-semibold mt-4">Evening Slots</h3>
          <div className="flex gap-2 sm:gap-4 mt-2 overflow-x-scroll scrollbar-hide">
            {docslots[selectedDate]?.evening?.map((slot, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 rounded-lg ${selectedSlot === slot ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
                onClick={() => setSelectedSlot(slot)}
              >
                {slot.time}
              </button>
            ))}
          </div>

          <button
            onClick={handleBooking}
            className="mt-10 px-6 py-4 bg-blue-500 text-lg text-white rounded-lg hover:bg-blue-600 transition"
          >
            Book Appointment
          </button>
        </div>

        {/* List Related Doctors */}
        <RelatedDoctors docId={docId} speciality={docinfo.speciality} />
      </div>

      <Footer />
    </>
  );
};

export default Appointment;