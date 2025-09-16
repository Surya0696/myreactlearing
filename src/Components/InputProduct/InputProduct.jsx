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

  const handleDelete = (id) => {
    const productDetel = products.filter((x) => x.id !== id);
    setProducts(productDetel);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Enter value"
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {products.map((product) => (
        <div key={product.id}>
          <ul>
            <li>{product.name}</li>
          </ul>
          <button onClick={() => handleDelete(product.id)}>Remove</button>
        </div>
      ))}
    </>
  );
}
