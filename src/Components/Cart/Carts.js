import React, { useState } from "react";
import { data } from "../../DataSet";

const Carts = () => {
  const [products, setproducts] = useState(data);
  const handleDeleteAll = () => {
    setproducts([]);
  };
  const handleRest = () => {
    setproducts(data);
  };

  const handleDelete = (id) => {
    const productCount = products.filter((x) => x.id !== id);
    setproducts(productCount);
  };

  return (
    <>
      <div>
        <p style={{ textAlign: "center" }}>Item In Card: {products.length} </p>
        {products.map((product, id) => {
          return (
            <div
              key={product.id}
              style={{
                backgroundColor: "gray",
                margin: "20px",
                padding: "10px",
              }}
            >
              <p>
                Product Name : {product.name}, RS:{product.price}
              </p>

              <button onClick={() => handleDelete(product.id)}>Delete</button>
            </div>
          );
        })}
        <div style={{ textAlign: "center", paddingBottom: "20px" }}>
          <button
            onClick={() => {
              handleDeleteAll();
            }}
          >
            Delete All
          </button>
          <div>
            <button
              onClick={() => {
                handleRest();
              }}
            >
              Rest Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
