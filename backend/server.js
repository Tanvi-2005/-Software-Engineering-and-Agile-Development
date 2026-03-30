const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: 'http://localhost:3000'
}));
app.use(express.json());

// Mock data
const users = [
  {
    email: 'student@campus.com',
    password: 'password123',
    name: 'John Student',
    rollNo: 'CS2024001',
    department: 'Computer Science',
    year: '2024',
    phone: '+1-234-567-8900'
  }
];

const events = [
  {
    id: 1,
    title: 'Tech Fest 2024',
    date: '2024-12-15T14:00:00Z',
    location: 'Main Auditorium',
    description: 'Annual technology festival.',
    category: 'Tech'
  },
  {
    id: 2,
    title: 'Sports Day',
    date: '2024-12-20T09:00:00Z',
    location: 'Sports Complex',
    description: 'Inter-department sports.',
    category: 'Sports'
  }
];

const dashboardStats = {
  attendance: '95%',
  cgpa: 4.2,
  credits: '32/40',
  bookings: 3,
  events: 5,
  notices: '2 New'
};

// Routes

// Auth
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    res.json({
      success: true,
      token: 'mock-jwt-token',
      user: {
        name: user.name,
        email: user.email,
        rollNo: user.rollNo,
        department: user.department,
        year: user.year
      }
    });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

// Events
app.get('/api/events', (req, res) => {
  res.json(events);
});

app.get('/api/events/:id', (req, res) => {
  const event = events.find(e => e.id === parseInt(req.params.id));
  if (event) res.json(event);
  else res.status(404).json({ message: 'Event not found' });
});

// Profile
app.get('/api/profile', (req, res) => {
  res.json(users[0]);
});

app.put('/api/profile', (req, res) => {
  console.log('Profile updated:', req.body);
  res.json({ success: true, message: 'Profile updated successfully' });
});

// Dashboard
app.get('/api/dashboard/stats', (req, res) => {
  res.json(dashboardStats);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Production static serve
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../build')));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on http://localhost:${PORT}`);
  console.log(`📱 Test: http://localhost:${PORT}/api/health`);
});

