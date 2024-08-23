import React from 'react';
import { Link } from 'react-router-dom';
import "./StudentDashboard.css"
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const StudentDashboard = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <h2>Student Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/booking-form">Book a Mentor</Link></li>
                    <li><Link to="/view-bookings">View Bookings</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default StudentDashboard;