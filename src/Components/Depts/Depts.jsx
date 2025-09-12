import React from "react";

const Depts = ({ DeptsLsist }) => {
  return (
    <>
      {DeptsLsist.map((items, index) => {
        return <li key={index}>{items}</li>;
      })}
    </>
  );
};

export default Depts;
