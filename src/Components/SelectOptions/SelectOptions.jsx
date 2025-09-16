import React, { useState } from "react";

function SelectOptions() {
  const data = [
    { id: 1, name: "iPhone X" },
    { id: 2, name: "iPhone 5" },
    { id: 3, name: "iPhone 6" },
    { id: 4, name: "iPhone 7" },
    { id: 5, name: "iPhone 8" },
  ];

  const [selectedList, setSelectedList] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value && !selectedList.includes(value)) {
      setSelectedList([...selectedList, value]);
    }
  };

  const handleDelete = (itemToDelete) => {
    const updatedList = selectedList.filter((item) => item !== itemToDelete);
    setSelectedList(updatedList);
  };

  return (
    <div>
      <select onChange={handleChange} value="">
        <option value="">-- Select --</option>
        {data.map((product) => (
          <option key={product.id} value={product.name}>
            {product.name}
          </option>
        ))}
      </select>

      {selectedList.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <ul>
            {selectedList.map((item, index) => (
              <li key={index} style={{ marginBottom: "5px" }}>
                {item}{" "}
                <button onClick={() => handleDelete(item)}>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default SelectOptions;
