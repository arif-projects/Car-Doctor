import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = (props) => {
  const { id, name, price, description, img } = props.service;
  return (
    <div className="service col-md-4 col-sm-12 gy-3">
      <div className="card p-3">
        <img className="w-100" src={img} alt="" />
        <h4 className="mt-2">{name}</h4>
        <h5>Price:{price}</h5>
        <p className="px-3">{description}</p>
        <Link to={`/booking/${id}`}>
          <button className="btn btn-primary">Book {name.toLowerCase()}</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
