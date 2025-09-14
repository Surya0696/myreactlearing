import React from "react";

const Depts = ({ DeptsLsist }) => {
  return (
    <>
      {DeptsLsist.map((items, index) => {
        return <button key={index}>{items}</button>;
      })}
    </>
  );
};

export default Depts;
