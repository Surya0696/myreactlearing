import React, { useState } from "react";

export default function InputProduct() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");

  const handleAdd = () => {
    if (!name.trim()) return;
    const newProduct = {
      id: products.length + 1,
      name,
    };
    setProducts([...products, newProduct]);
    setName("");
  };

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="enter value"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleAdd}>ADD</button>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <ul>
              <li>{product.name}</li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
