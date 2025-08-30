import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyAppointments = () => {
  const { doctors } = useContext(AppContext);

  const [appointments, setAppointments] = useState([
    {
      id: 1,
      doctorId: doctors[0]?._id,
      doctorName: doctors[0]?.name,
      doctorImage: doctors[0]?.image,
      speciality: doctors[0]?.speciality,
      appointmentDate: '2025-04-05',
      bookingDate: '2025-03-28',
      status: 'completed',
    },
    {
      id: 2,
      doctorId: doctors[1]?._id,
      doctorName: doctors[1]?.name,
      doctorImage: doctors[1]?.image,
      speciality: doctors[1]?.speciality,
      appointmentDate: '2025-04-10',
      bookingDate: '2025-03-29',
      status: 'upcoming',
    },
    {
      id: 3,
      doctorId: doctors[2]?._id,
      doctorName: doctors[2]?.name,
      doctorImage: doctors[2]?.image,
      speciality: doctors[2]?.speciality,
      appointmentDate: '2025-03-25',
      bookingDate: '2025-03-20',
      status: 'failed',
    },
  ]);

  const handleCancel = (appointmentId) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === appointmentId
          ? { ...appointment, status: 'failed' }
          : appointment
      )
    );
    toast.info(' Appointment has been canceled.');
  };

  return (
    <>
      <Navbar />
      <ToastContainer position="top-center" autoClose={2500} />
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-blue-800 mb-8">My Appointments</h1>
          <div className="grid grid-cols-1 gap-6">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="w-11/12 mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6 border border-gray-200"
              >
                {/* Doctor Image */}
                <div className="w-32 h-32 rounded-full overflow-hidden">
                  <img
                    src={appointment.doctorImage}
                    alt={appointment.doctorName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Appointment Details */}
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-blue-800">{appointment.doctorName}</h2>
                  <p className="text-gray-600">{appointment.speciality}</p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Booking Date:</span> {appointment.bookingDate}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold">Appointment Date:</span>{' '}
                    {appointment.appointmentDate}
                  </p>
                </div>

                {/* Status or Cancel Button */}
                <div className="flex flex-col items-center gap-2">
                  {appointment.status === 'upcoming' && (
                    <button
                      onClick={() => handleCancel(appointment.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
                    >
                      Cancel Appointment
                    </button>
                  )}
                  {appointment.status === 'completed' && (
                    <div className="flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-lg">
                      <span className="material-symbols-outlined text-green-600 text-4xl">
                        check_circle
                      </span>
                      <span>Completed</span>
                    </div>
                  )}
                  {appointment.status === 'failed' && (
                    <div className="flex items-center gap-2 bg-red-100 text-red-700 px-4 py-2 rounded-lg">
                      <span className="material-symbols-outlined">cancel</span>
                      <span>Failed</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyAppointments;
