import React from "react";
import { useParams } from "react-router-dom";

const Booking = () => {
  const { bookingId } = useParams();
  return (
    <div>
      <h3>This is booking page.</h3>
      <h4>ID: {bookingId}</h4>
    </div>
  );
};

export default Booking;
