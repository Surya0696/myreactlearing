import React, { useState } from 'react';

function SelectOptions() {
  const data = [
    { id: 1, name: 'iPhone X' },
    { id: 2, name: 'iPhone 5' },
    { id: 3, name: 'iPhone 6' },
    { id: 4, name: 'iPhone 7' },
    { id: 5, name: 'iPhone 8' },
  ];

  const [selectedList, setSelectedList] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    if (value && !selectedList.includes(value)) {
      setSelectedList([...selectedList, value]);
    }
  };

  const handleDelete = (value) => {
    const updatedList = selectedList.filter((x) => x !== value);
    setSelectedList(updatedList);
  };

  return (
    <div>
      <select value="" onChange={handleChange}>
        <option value="">---- Select ----</option>
        {data.map((dataList) => (
          <option key={dataList.id} value={dataList.name}>
            {dataList.name}
          </option>
        ))}
      </select>

      <ul>
        {selectedList.map((item, i) => (
          <li key={i}>
            {item}
            <button onClick={() => handleDelete(item)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SelectOptions;
