import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { assets } from '../assets/assets_frontend/assets';

const AboutSection = () => {
  return (
    <div className="py-12 bg-gray-50">
      <div className="w-11/12 lg:w-10/12 mx-auto p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 shadow-lg rounded-xl bg-white">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            Welcome to our Doctor Appointment Booking Platform, where we
            prioritize your health by making healthcare accessible and
            convenient. Our mission is to bridge the gap between patients and
            healthcare providers through seamless online appointment scheduling.
          </p>
          <p className="text-lg md:text-xl text-gray-700 mb-4">
            We understand the importance of your time and well-being. Our
            platform offers an easy-to-use interface where you can browse
            through a variety of healthcare providers, check their availability,
            and book appointments at your convenience.
          </p>
          <p className="text-lg md:text-xl text-gray-700">
            Our goal is to empower patients with the ability to make informed
            healthcare decisions. Whether it's a routine check-up or a
            specialized consultation, we are here to simplify the process for
            you.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center">
          <img
            src={assets.about_image}
            alt="Healthcare Illustration"
            className="w-full h-auto max-w-md md:max-w-lg rounded-2xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-xl md:text-2xl text-blue-700 mb-2">
              Trusted Doctors
            </h3>
            <p className="text-gray-700">
              We connect you with verified and experienced healthcare
              professionals who are committed to providing the best care
              possible.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-xl md:text-2xl text-blue-700 mb-2">
              Easy Appointments
            </h3>
            <p className="text-gray-700">
              Our user-friendly platform makes it simple to book appointments
              with just a few clicks, saving you time and effort.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-xl md:text-2xl text-blue-700 mb-2">
              Secure & Reliable
            </h3>
            <p className="text-gray-700">
              We prioritize your privacy and ensure that your personal health
              information remains secure and confidential.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-xl md:text-2xl text-blue-700 mb-2">
              24/7 Support
            </h3>
            <p className="text-gray-700">
              Our support team is available around the clock to assist you with
              any questions or concerns you may have.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-xl md:text-2xl text-blue-700 mb-2">
              Wide Range of Specialties
            </h3>
            <p className="text-gray-700">
              From general practitioners to specialists, find healthcare
              providers for all your medical needs in one place.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="font-bold text-xl md:text-2xl text-blue-700 mb-2">
              Patient Reviews
            </h3>
            <p className="text-gray-700">
              Read genuine reviews from other patients to help you make informed
              decisions when choosing a doctor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <>
      <Navbar />
      <AboutSection />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default About;