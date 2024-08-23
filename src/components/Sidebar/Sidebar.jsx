import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link to="/booking-dashboard">Book Appointment</Link></li>
          <li><Link to="/dashboard">View Bookings</Link></li>
          <li><Link to="/mentor-dashboard">Mentor Dashboard</Link></li>
          <li><Link to="/student-dashboard">Student Dashboard</Link></li>
          <li><Link to="/payment">Payment</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;