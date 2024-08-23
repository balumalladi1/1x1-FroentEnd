import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import BookingForm from "./components/BookingForm/BookingForm";
import MentorDashboard from "./components/MentorDashboard/MentorDashboard";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import ViewBookings from './components/ViewBookings/ViewBookings';


function App() {
  return (
    <Router>
      
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/booking-form" element={<BookingForm />} />
          
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/view-bookings" element={<ViewBookings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;