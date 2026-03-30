import React, { useState } from 'react';

const mockEvents = [
  {
    id: 1,
    title: 'Tech Fest 2024',
    date: 'Dec 15, 2024 - 2:00 PM',
    location: 'Main Auditorium',
    description: 'Annual technology festival with hackathon, workshops and guest speakers.',
    category: 'Tech',
    rsvp: true
  },
  {
    id: 2,
    title: 'Sports Day',
    date: 'Dec 20, 2024 - 9:00 AM',
    location: 'Sports Complex',
    description: 'Annual inter-department sports competition.',
    category: 'Sports',
    rsvp: true
  },
  {
    id: 3,
    title: 'Career Fair',
    date: 'Jan 10, 2025 - 10:00 AM',
    location: 'Convention Hall',
    description: 'Meet top recruiters from tech, finance and consulting.',
    category: 'Career',
    rsvp: true
  },
  {
    id: 4,
    title: 'Cultural Night',
    date: 'Jan 25, 2025 - 7:00 PM',
    location: 'Auditorium',
    description: 'Student performances and cultural celebrations.',
    category: 'Cultural',
    rsvp: true
  },
];

export default function Events() {
  const [filter, setFilter] = useState('all');
  const [search, setSearch] = useState('');

  const filteredEvents = mockEvents.filter(event => {
    const matchesFilter = filter === 'all' || event.category.toLowerCase() === filter;
    const matchesSearch = event.title.toLowerCase().includes(search.toLowerCase()) ||
                         event.location.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Campus Events
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest happenings on campus. RSVP for events you're interested in!
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8 bg-white p-6 rounded-2xl shadow-xl">
          <select 
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="tech">Tech</option>
            <option value="sports">Sports</option>
            <option value="career">Career</option>
            <option value="cultural">Cultural</option>
          </select>
          <input
            type="text"
            placeholder="Search events..."
            className="flex-1 p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <div key={event.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
              <div className={`p-6 pb-2 ${event.category === 'Tech' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 
                                     event.category === 'Sports' ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                                     event.category === 'Career' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                                     'bg-gradient-to-r from-purple-500 to-pink-500'} text-white`}>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white bg-opacity-20">
                  {event.category}
                </span>
                <h3 className="text-2xl font-bold mt-2 group-hover:translate-y-1 transition-transform duration-300">
                  {event.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {event.location}
                  </div>
                </div>
                <p className="text-gray-600 mb-6 line-clamp-3">{event.description}</p>
                <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                  {event.rsvp ? 'RSVP Now' : 'Full'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <svg className="w-24 h-24 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2 2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
