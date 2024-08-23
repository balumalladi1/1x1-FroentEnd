import React from 'react';
import { Link } from 'react-router-dom';
import "./MentorDashboard.css"

const MentorDashboard = () => {
    return (
        <div>
            <h2>Mentor Dashboard</h2>
            <nav>
                <ul>
                    <li><Link to="/view-bookings">View Bookings</Link></li>
                    <li><Link to="/update-availability">Update Availability</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default MentorDashboard;