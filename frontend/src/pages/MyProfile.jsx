import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MyProfile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    image: 'https://preview.redd.it/some-images-generated-using-the-new-bing-image-creator-v0-zfohxnf8t3pa1.jpg?width=1024&format=pjpg&auto=webp&s=33274aadae0e0332e60dd15c87617ea6652365b5',
    name: 'John Doe',
    email: 'johndoe@example.com',
    about: 'A passionate web developer and technology enthusiast.',
    gender: 'Male',
    phone: '+1 234 567 890',
    address: {
      line1: '123, Silicon Valley',
      line2: 'CA, USA',
    },
    dob: '1995-05-20',
    profession: 'Software Engineer',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'line1' || name === 'line2') {
      setProfile({ ...profile, address: { ...profile.address, [name]: value } });
    } else {
      setProfile({ ...profile, [name]: value });
    }
  };

  const handleSave = () => {
    setEditMode(false);
    alert('Profile saved successfully!');
    console.log('Updated Profile:', profile);
  };

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-2xl mt-10">
      <div className="flex flex-col items-center">
        <img
          src={profile.image}
          alt="Profile"
          className="w-50 h-50 rounded-full object-cover mb-4"
          />
        <h1 className="text-2xl font-bold text-blue-800 mb-2">{profile.name}</h1>
        <p className="text-gray-600 mb-4">{profile.profession}</p>

        <div className="w-full space-y-4">
          <div>
            <label className="text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              disabled={!editMode}
              className={`w-full p-3 rounded-lg border ${editMode ? 'border-blue-500' : 'border-gray-300'}`}
              />
          </div>

          <div>
            <label className="text-gray-600">About</label>
            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
              disabled={!editMode}
              className={`w-full p-3 rounded-lg border ${editMode ? 'border-blue-500' : 'border-gray-300'}`}
              ></textarea>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-gray-600">Gender</label>
              <input
                type="text"
                name="gender"
                value={profile.gender}
                onChange={handleChange}
                disabled={!editMode}
                className={`w-full p-3 rounded-lg border ${editMode ? 'border-blue-500' : 'border-gray-300'}`}
                />
            </div>
            <div>
              <label className="text-gray-600">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={profile.dob}
                onChange={handleChange}
                disabled={!editMode}
                className={`w-full p-3 rounded-lg border ${editMode ? 'border-blue-500' : 'border-gray-300'}`}
                />
            </div>
          </div>

          <div>
            <label className="text-gray-600">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profile.phone}
              onChange={handleChange}
              disabled={!editMode}
              className={`w-full p-3 rounded-lg border ${editMode ? 'border-blue-500' : 'border-gray-300'}`}
              />
          </div>

          <div>
            <label className="text-gray-600">Address Line 1</label>
            <input
              type="text"
              name="line1"
              value={profile.address.line1}
              onChange={handleChange}
              disabled={!editMode}
              className={`w-full p-3 rounded-lg border ${editMode ? 'border-blue-500' : 'border-gray-300'}`}
              />
          </div>

          <div>
            <label className="text-gray-600">Address Line 2</label>
            <input
              type="text"
              name="line2"
              value={profile.address.line2}
              onChange={handleChange}
              disabled={!editMode}
              className={`w-full p-3 rounded-lg border ${editMode ? 'border-blue-500' : 'border-gray-300'}`}
              />
          </div>

          <div className="flex justify-end space-x-4 mt-4">
            {editMode ? (
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                onClick={handleSave}
              >
                Save
              </button>
            ) : (
              <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              onClick={() => setEditMode(true)}
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default MyProfile;