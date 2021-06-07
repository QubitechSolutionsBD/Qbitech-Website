import React from "react";
//svg import
import svg1 from "../../assets/department-icons/all.svg";
import svg2 from "../../assets/department-icons/desktop.svg";
import svg3 from "../../assets/department-icons/lense.svg";
import svg4 from "../../assets/department-icons/qa.svg";
import svg5 from "../../assets/department-icons/ba.svg";
import svg6 from "../../assets/department-icons/cloud.svg";
import svg7 from "../../assets/department-icons/consultant.svg";
import svg8 from "../../assets/department-icons/AI.svg";
import Department from "./Department";

const Departments = () => {
  const dataset = [
    { svg: svg1, desc: "All" },
    { svg: svg2, desc: "Software Development" },
    { svg: svg3, desc: "Data Analytics & Research" },
    { svg: svg4, desc: "Quality Assurance" },
    { svg: svg5, desc: "Business Intelligence" },
    { svg: svg6, desc: "Cloud & IOT Based Solution" },
    { svg: svg7, desc: "IT Consultancy" },
    { svg: svg8, desc: "AI Solution" },
  ];
  return (
    <>
      <div className="blog__departments">
        {dataset.map((data) => (
          <Department data={data} />
        ))}
      </div>
    </>
  );
};

export default Departments;
