import React from "react";

const Department = ({ data }) => {
  return (
    <div className="department">
      <img src={data.svg} alt="" />
      <p>{data.desc}</p>
    </div>
  );
};

export default Department;
