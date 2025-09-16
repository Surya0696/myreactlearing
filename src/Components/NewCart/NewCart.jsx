import React, { useState } from "react";

const NewCart = () => {
  let data = [
    { id: 1, name: "iPhone X", price: "70,000" },
    { id: 2, name: "iPhone 5", price: "71,000" },
    { id: 3, name: "iPhone 6", price: "79,000" },
    { id: 4, name: "iPhone 7", price: "76,000" },
    { id: 5, name: "iPhone 8", price: "72,000" },
  ];
  const [products, SetProduct] = useState(data);

  const handleDelete = (id) => {
    const productDelete = products.filter((x) => x.id !== id);
    SetProduct(productDelete);
  };

  const handleDeleteAll = () => {
    SetProduct([]);
  };

  const handleShowAll = () => {
    SetProduct(data);
  };

  return (
    <div>
      <p>Count : {products.length}</p>
      {products.map((product, id) => {
        return (
          <div key={id}>
            <p>
              {product.name} - {product.price}{" "}
            </p>

            <button
              onClick={() => {
                handleDelete(product.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
      <div style={{ marginTop: "20px" }}>
        <button onClick={products.length > 0 ? handleDeleteAll : handleShowAll}>
          {products.length > 0 ? "delete all" : "Show all"}
        </button>
      </div>
    </div>
  );
};

export default NewCart;
