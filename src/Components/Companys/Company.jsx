import React from "react";
import Depts from "../Depts/Depts";

const Company = (props) => {
  const { CompanyName, details, DeptsLsist } = props;
  const btnHandle = () => {
    console.log("clicked it " + CompanyName);
  };
  return (
    <>
      <div style={{ backgroundColor: "gray", width: " 50%" }}>
        <div style={{ padding: "20px", marginTop: "20px" }}>
          <h2>Company Name: {CompanyName}</h2>
          <p>{details}</p>

          <button onClick={btnHandle}>Search</button>
          <Depts DeptsLsist={DeptsLsist} />
        </div>
      </div>
    </>
  );
};

export default Company;
