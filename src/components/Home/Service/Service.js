import React from "react";
import "./Service.css";

const Service = (props) => {
  const { name, price, description, img } = props.service;
  return (
    <div className="service col-md-4 col-sm-12 gy-3">
      <div className="card">
        <img className="w-100" src={img} alt="" />
        <h4 className="mt-2">{name}</h4>
        <h5>Price:{price}</h5>
        <p className="px-3">{description}</p>
      </div>
    </div>
  );
};

export default Service;
