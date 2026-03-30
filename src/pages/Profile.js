import React, { useState, useContext } from 'react';
import { AuthContext } from '../App';

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    phone: '',
    department: 'Computer Science',
    year: '2024',
    rollNo: 'CS2024001'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', formData);
    setIsEditing(false);
    // Update context here if needed
  };

  return (
    <div className="p-8 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 shadow-2xl flex items-center justify-center">
            <svg className="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {formData.name}
          </h1>
          <p className="text-xl text-gray-600 mb-2">{formData.rollNo}</p>
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            {formData.department} - {formData.year}
          </span>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">4.2</div>
            <div className="text-sm text-gray-600">CGPA</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">32/40</div>
            <div className="text-sm text-gray-600">Credits</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-sm text-gray-600">Attendance</div>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
            <div className="text-sm text-gray-600">Active Bookings</div>
          </div>
        </div>

        {/* Edit Toggle */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Department</label>
              <select
                name="department"
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.department}
                onChange={handleInputChange}
                disabled={!isEditing}
              >
                <option>Computer Science</option>
                <option>Electrical Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Business Administration</option>
              </select>
            </div>
          </div>

          {isEditing && (
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-12 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 text-lg"
              >
                💾 Save Changes
              </button>
            </div>
          )}
        </form>

        {/* Academic Records */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">📚 Current Semester</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-4 bg-white rounded-xl shadow">
                <span>Math 101</span>
                <span className="font-bold">A</span>
              </div>
              <div className="flex justify-between p-4 bg-white rounded-xl shadow">
                <span>Physics 201</span>
                <span className="font-bold">A-</span>
              </div>
              <div className="flex justify-between p-4 bg-white rounded-xl shadow">
                <span>Algorithms</span>
                <span className="font-bold">A+</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-gray-900 mb-6">📈 Attendance Summary</h3>
            <div className="space-y-3">
              <div className="flex justify-between p-4 bg-white rounded-xl shadow">
                <span>Current Semester</span>
                <span className="text-green-600 font-bold">95%</span>
              </div>
              <div className="flex justify-between p-4 bg-white rounded-xl shadow">
                <span>Previous Semester</span>
                <span className="text-green-600 font-bold">92%</span>
              </div>
              <div className="flex justify-between p-4 bg-white rounded-xl shadow">
                <span>Overall</span>
                <span className="text-green-600 font-bold">94%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
