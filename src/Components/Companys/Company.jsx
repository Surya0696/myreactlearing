import React from "react";

const Company = (props) => {
  const { CompanyName, Role } = props;
  const btnHandle = () => {
    console.log("clicked it " + CompanyName);
  };
  return (
    <>
      <div style={{ backgroundColor: "gray", width: " 50%" }}>
        <div style={{ padding: "20px", marginTop: "20px" }}>
          <h2>Company Name: {CompanyName}</h2>
          <p>{Role}</p>

          <button onClick={btnHandle}>Search</button>
        </div>
      </div>
    </>
  );
};

export default Company;
