import React, { useState } from "react";
import axios from "axios";
import "./PaymentPage.css"

const PaymentPage = () => {
  const [duration, setDuration] = useState("");

  const handlePayment = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/v1/payment",
        { duration },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      alert("Payment processed successfully");
    } catch (error) {
      console.error("Error processing payment:", error);
      alert("Payment failed");
    }
  };

  return (
    <div>
      <h2>Payment Page</h2>
      <label>Duration (in minutes):</label>
      <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
};

export default PaymentPage;