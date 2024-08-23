import React, { useState } from 'react';
import axios from 'axios';

function UpdateBookings() {
  const [bookingId, setBookingId] = useState('');
  const [updatedDetails, setUpdatedDetails] = useState('');

  const handleUpdate = () => {
    axios.put(`http://localhost:8080/bookings/${bookingId}`, { details: updatedDetails })  // Adjust the API endpoint as needed
      .then(response => {
        alert('Booking updated successfully!');
      })
      .catch(error => {
        console.error('There was an error updating the booking!', error);
      });
  };

  return (
    <div>
      <h2>Update Booking</h2>
      <input
        type="text"
        placeholder="Booking ID"
        value={bookingId}
        onChange={(e) => setBookingId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Updated Details"
        value={updatedDetails}
        onChange={(e) => setUpdatedDetails(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Booking</button>
    </div>
  );
}

export default UpdateBookings;