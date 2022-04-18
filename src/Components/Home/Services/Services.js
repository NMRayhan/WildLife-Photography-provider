import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
      .then((response) => response.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="w-75 mx-auto">
      <h1 className="text-center text-secondary mt-2">Our Service</h1>
      <div className="row">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
