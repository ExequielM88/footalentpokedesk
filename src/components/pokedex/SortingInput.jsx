// SortingInput.jsx
import React from 'react';

const SortingInput = ({ sortOrder, handleSortOrderChange }) => {
  const handleOrderChange = (event) => {
    const selectedOrder = event.target.value;
    handleSortOrderChange(selectedOrder);
  };

  return (
    <div className="sorting-input-container">
      <label htmlFor="sortOrder">Orden:</label>
      <select
        id="sortOrder"
        value={sortOrder}
        onChange={handleOrderChange}
      >
        <option value="asc">Ascendente</option>
        <option value="desc">Descendente</option>
      </select>
    </div>
  );
};

export default SortingInput;
