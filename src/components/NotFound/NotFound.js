import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <img className="notFound" src="https://i.ibb.co/z5s8ZKR/404.png" alt="" />{" "}
      <br />
      <Link to="/home">
        <button className="btn btn-primary">Go back</button>
      </Link>
    </div>
  );
};

export default NotFound;
