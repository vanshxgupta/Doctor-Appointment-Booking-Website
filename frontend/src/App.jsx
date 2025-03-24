import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctors from './pages/Doctors';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Login from './pages/Login';
import Appointment from './pages/Appointment';

function AppRoutes() {
  return (
    <div className='mx-2 my-2 '>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />

        {/* User-Specific Routes */}
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;