import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BookingForm.css';

function BookingForm() {
  const [mentors, setMentors] = useState([]);
  const [mentorId, setMentorId] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch mentors when the component mounts
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('/api/v1/mentors');
        console.log('Fetched mentors:', response.data); // Log data for debugging
        if (Array.isArray(response.data)) {
          setMentors(response.data); // Set mentors data from API
        } else {
          console.error('Unexpected data format:', response.data);
        }
      } catch (error) {
        console.error('Failed to fetch mentors', error);
      }
    };

    fetchMentors();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mentorId) {
      setError('Please select a mentor.');
      return;
    }

    if (!startTime || !endTime) {
      setError('Please provide both start and end times.');
      return;
    }

    try {
      const response = await axios.post('/api/v1/bookings', {
        mentor_id: mentorId,
        start_time: startTime,
        end_time: endTime
      });
      setSuccess('Booking successful!');
      setError('');
    } catch (error) {
      console.error('Error booking appointment:', error);
      setError('Failed to book the appointment.');
      setSuccess('');
    }
  };

  return (
    <div className="booking-form">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="mentor">Select Mentor</label>
        <select
          id="mentor"
          value={mentorId}
          onChange={(e) => setMentorId(e.target.value)}
          required
        >
          <option value="">Select Mentor</option>
          {mentors.length > 0 ? (
            mentors.map((mentor) => (
              <option key={mentor.user_id} value={mentor.user_id}>
                {mentor.name}
              </option>
            ))
          ) : (
            <option value="">No Mentors Available</option>
          )}
        </select>

        <label htmlFor="start-time">Start Time</label>
        <input
          type="datetime-local"
          id="start-time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />

        <label htmlFor="end-time">End Time</label>
        <input
          type="datetime-local"
          id="end-time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />

        <button type="submit">Book Appointment</button>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}
      </form>
    </div>
  );
}

export default BookingForm;