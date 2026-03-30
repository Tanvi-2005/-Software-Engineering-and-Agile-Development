import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  const stats = [
    { title: 'Attendance', value: '95%', color: 'bg-green-500', icon: '✅' },
    { title: 'Grades', value: 'A-', color: 'bg-blue-500', icon: '📚' },
    { title: 'Active Bookings', value: '3', color: 'bg-purple-500', icon: '📅' },
    { title: 'Upcoming Events', value: '5', color: 'bg-orange-500', icon: '🎉' },
    { title: 'Notices', value: '2 New', color: 'bg-red-500', icon: '📢' },
    { title: 'Library Books', value: '7 Borrowed', color: 'bg-indigo-500', icon: '📖' },
  ];

  return (
    <div className="p-8 bg-gradient-to-br from-indigo-50 to-blue-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Welcome back, {user?.name}!</h1>
          <p className="text-xl text-gray-600">Here's what's happening on campus today.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className={`p-6 rounded-2xl shadow-xl ${stat.color} text-white transform hover:scale-105 transition-all duration-300`}>
              <div className="flex items-center">
                <span className="text-3xl mr-4">{stat.icon}</span>
                <div>
                  <p className="text-lg font-medium opacity-90">{stat.title}</p>
                  <p className="text-3xl font-bold">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <Link to="/events" className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-xl text-center font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                View Events
              </Link>
              <Link to="/profile" className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-xl text-center font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                Edit Profile
              </Link>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Activity</h2>
            <ul className="space-y-3">
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                <span>Attendance marked for Math 101</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                <span>Library book renewed</span>
              </li>
              <li className="flex items-center p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                <span>Event RSVP confirmed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
