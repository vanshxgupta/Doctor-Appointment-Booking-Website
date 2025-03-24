import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-100 pt-10">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="justify-between items-center gap-12 md:flex">
          <div className="flex-1 max-w-lg">
            <h3 className="text-2xl font-bold">Stay Connected</h3>
            <p className="mt-2 text-gray-500">Join our community for the latest updates.</p>
          </div>
          <div className="flex-1 mt-6 md:mt-0">
            <form className="flex items-center gap-x-3 md:justify-end">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full pl-4 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
              <button className="py-2 px-4 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex-1 mt-16 space-y-6 justify-between sm:flex md:space-y-0">
          <ul className="space-y-4 text-gray-600">
            <h4 className="text-gray-800 font-semibold sm:pb-2">Quick Links</h4>
            <li><a href="/home" className="hover:text-gray-800 duration-150">Home</a></li>
            <li><a href="/about" className="hover:text-gray-800 duration-150">About</a></li>
            <li><a href="/doctors" className="hover:text-gray-800 duration-150">Doctors</a></li>
            <li><a href="/contact" className="hover:text-gray-800 duration-150">Contact</a></li>
          </ul>

          <ul className="space-y-4 text-gray-600">
            <h4 className="text-gray-800 font-semibold sm:pb-2">Support</h4>
            <li><a href="/faq" className="hover:text-gray-800 duration-150">FAQ</a></li>
            <li><a href="/terms" className="hover:text-gray-800 duration-150">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-gray-800 duration-150">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="mt-10 py-10 border-t flex items-center justify-between">
          <p className="text-gray-600 items-center">&copy; {new Date().getFullYear()} MEDICAL. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;