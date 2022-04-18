import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate()

  const handleCheckOut = (event) =>{
    navigate(`/service/${serviceId}/checkout`)
  }

  return (
    <div className="mt-5">
      <h1>Welcome to Service Details Id : {serviceId}</h1>
      <div className="w-25 mx-auto">
        <button className="btn btn-outline-primary w-100" onClick={handleCheckOut}>Process to Booking</button>
      </div>
    </div>
  );
};

export default ServiceDetails;
