import React from "react";
import Depts from "../Depts/Depts";

const Company = (props) => {
  const { CompanyName, details, DeptsLsist, onSelectedBtn } = props;

  return (
    <>
      <div style={{ backgroundColor: "gray", width: " 50%" }}>
        <div style={{ padding: "20px", marginTop: "20px" }}>
          <h2>Company Name: {CompanyName}</h2>
          <p>{details}</p>

          <button
            onClick={() => {
              onSelectedBtn(CompanyName);
            }}
          >
            Search
          </button>
          <h3>Departments</h3>
          <Depts DeptsLsist={DeptsLsist} on />
        </div>
      </div>
    </>
  );
};

export default Company;
