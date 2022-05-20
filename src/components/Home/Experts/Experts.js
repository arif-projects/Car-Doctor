import React, { useState } from "react";
import { useEffect } from "react";
import Expert from "../Expert/Expert";

const Experts = () => {
  const [experts, setExperts] = useState([]);

  useEffect(() => {
    fetch("experts.json")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div className="container mt-5 mb-3">
      <h3 className="text-primary">Our Experts</h3>
      <div className="row">
        {experts.map((expert) => (
          <Expert key={expert.id} expert={expert}></Expert>
        ))}
      </div>
    </div>
  );
};

export default Experts;
