import React from "react";

const Expert = (props) => {
  const { name, expertize, img } = props.expert;
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 gy-3">
      <div className="card">
        <img src={img} alt="" />
        <h4>{name}</h4>
        <h5>{expertize}</h5>
      </div>
    </div>
  );
};

export default Expert;
