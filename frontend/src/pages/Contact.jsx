import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-gray-700">
              Have questions or need support? Reach out to us, and we will get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 shadow-lg rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-6">Send Us a Message</h2>
              <form className="grid grid-cols-1 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  className="p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="bg-blue-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-between">
              <div className="bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold text-blue-800 mb-6">Get in Touch</h2>
                <p className="text-gray-700 mb-4">
                  Feel free to contact us through any of the following methods. We're here to help!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://img.icons8.com/ios-filled/50/4caf50/phone.png"
                      alt="Phone"
                      className="w-6 h-6"
                    />
                    <p className="text-gray-700">+1 234 567 890</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://img.icons8.com/ios-filled/50/4caf50/email.png"
                      alt="Email"
                      className="w-6 h-6"
                    />
                    <p className="text-gray-700">support@medicalapp.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <img
                      src="https://img.icons8.com/ios-filled/50/4caf50/address.png"
                      alt="Address"
                      className="w-6 h-6"
                    />
                    <p className="text-gray-700">
                      123 Healthcare Street, <br />
                      Wellness City, USA
                    </p>
                  </div>
                </div>
              </div>

              {/* Embedded Google Map */}
              <div className="mt-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3666.6884491830187!2d77.40489377514672!3d23.21802197903725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42e6172cd895%3A0x4db3061b2d53709c!2sMANIT%20Bhopal!5e0!3m2!1sen!2sin!4v1743174161992!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  className='rounded-2xl'
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
