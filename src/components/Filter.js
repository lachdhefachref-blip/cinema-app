import React from "react";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Filtrer par titre"
        onChange={(e) => setFilterTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Filtrer par note"
        onChange={(e) => setFilterRating(Number(e.target.value))}
      />
    </div>
  );
};

export default Filter;
