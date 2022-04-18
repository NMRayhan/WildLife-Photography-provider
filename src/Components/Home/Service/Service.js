import React from "react";
import { Button } from "react-bootstrap";
import "./Service.css";

const Service = ({ service }) => {
  const { id, Price, name, description, img } = service;
  return (
    <div className="col-sm-12 col-md-6 col-lg-4">
      <div className="card mt-4">
        <img src={img} className="card-img-top" alt="..." />
        <button className="btn btn-outline-secondary fw-bold fs-4 book-btn">Book</button>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h3 className="card-title">
            Per day <span className="text-info">{Price}</span>
          </h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
