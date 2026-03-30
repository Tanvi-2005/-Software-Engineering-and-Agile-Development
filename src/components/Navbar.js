import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';

export default function Navbar() {
  const { isLoggedIn, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center shadow-lg">
      <Link to="/" className="text-2xl font-bold hover:text-blue-200">
        🏫 Smart Campus Portal
      </Link>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-blue-200">Home</Link>
        {!isLoggedIn ? (
          <Link to="/login" className="hover:text-blue-200">Login</Link>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link>
            <Link to="/events" className="hover:text-blue-200">Events</Link>
            <Link to="/profile" className="hover:text-blue-200">Profile</Link>
            <span className="text-sm">Hi, {user?.name}</span>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
