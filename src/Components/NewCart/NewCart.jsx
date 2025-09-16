import React, { useState } from "react";

export default function NewCart() {
  const data = [
    { id: 1, name: "iPhone X", price: "70,000" },
    { id: 2, name: "iPhone 5", price: "71,000" },
    { id: 3, name: "iPhone 6", price: "79,000" },
    { id: 4, name: "iPhone 7", price: "76,000" },
    { id: 5, name: "iPhone 8", price: "72,000" },
  ];

  const [products, setProducts] = useState(data);
  const [search, setSearch] = useState("");

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !price) return; // simple validation
    const newProduct = {
      id: products.length + 1,
      name,
      price,
    };
    setProducts([...products, newProduct]);
    setName("");
    setPrice("");
  };

  const handleDelete = (id) => {
    const productDelete = products.filter((x) => x.id !== id);
    setProducts(productDelete);
  };

  const handleDeleteAll = () => {
    setProducts([]);
  };

  const handleShowAll = () => {
    setProducts(data);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <p>Count: {products.length}</p>

      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <p>
            {product.name} - ₹{product.price}
          </p>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={products.length > 0 ? handleDeleteAll : handleShowAll}>
          {products.length > 0 ? "Delete All" : "Show All"}
        </button>
      </div>
    </div>
  );
}
