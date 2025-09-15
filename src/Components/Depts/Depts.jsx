import React from "react";

const Depts = ({ DeptsLsist, HandleSelectedDepts }) => {
  return (
    <>
      {DeptsLsist.map((items, index) => {
        <li key={index}>{items}</li>;
        return (
          <button
            onClick={() => {
              HandleSelectedDepts(items);
            }}
          >
            {items}
          </button>
        );
      })}
    </>
  );
};

export default Depts;
