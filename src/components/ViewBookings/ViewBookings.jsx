import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ViewBookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/bookings')  // Adjust the API endpoint as needed
      .then(response => {
        setBookings(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the bookings!', error);
      });
  }, []);

  return (
    <div>
      <h2>View Bookings</h2>
      {bookings.length > 0 ? (
        <ul>
          {bookings.map(booking => (
            <li key={booking.id}>{booking.details}</li>  // Customize as per your booking object
          ))}
        </ul>
      ) : (
        <p>No bookings available.</p>
      )}
    </div>
  );
}

export default ViewBookings;