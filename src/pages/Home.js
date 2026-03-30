import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 mb-8">
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-lg font-medium">Smart Campus Portal - Revolutionizing Campus Life</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
              Your Campus,
              <br />
              <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">Connected</span>
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              A centralized platform for managing academic resources, campus events, 
              facility bookings, and community engagement. Everything you need in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <Link
                to="/login"
                className="group relative px-12 py-4 bg-white text-indigo-900 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 flex items-center"
              >
                🚀 Get Started
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                to="/events"
                className="px-12 py-4 border-2 border-white border-opacity-40 rounded-2xl font-bold text-lg hover:bg-white hover:text-indigo-900 hover:border-transparent transition-all duration-300 backdrop-blur-sm"
              >
                View Events
              </Link>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: '📊',
                title: 'Dashboard',
                desc: 'Real-time insights into attendance, grades, bookings, and notifications.'
              },
              {
                icon: '🎉',
                title: 'Events',
                desc: 'Discover, RSVP, and manage all campus events and activities.'
              },
              {
                icon: '👤',
                title: 'Profile',
                desc: 'Complete profile management and academic record access.'
              }
            ].map((feature, index) => (
              <div key={index} className="group p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-500 hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-indigo-200 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-24 grid md:grid-cols-4 gap-8 text-center">
            {[
              { num: '10K+', label: 'Students' },
              { num: '250+', label: 'Events/Year' },
              { num: '100%', label: 'Uptime' },
              { num: '24/7', label: 'Support' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl md:text-5xl font-black text-yellow-400 mb-2 animate-pulse">
                  {stat.num}
                </div>
                <div className="text-lg font-medium text-indigo-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
