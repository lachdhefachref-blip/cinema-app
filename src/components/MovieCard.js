import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "10px",
      marginBottom: "10px",
      display: "flex",
      gap: "15px",
      alignItems: "center",
      maxWidth: "500px",
      boxShadow: "2px 2px 8px rgba(0,0,0,0.1)"
    }}>
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{
          width: "120px",
          height: "180px",
          objectFit: "cover",
          borderRadius: "5px",
          flexShrink: 0
        }}
        onError={(e) => { e.target.src = "https://via.placeholder.com/120x180?text=No+Image"; }}
      />
      <div>
        <h3 style={{ margin: "0 0 5px 0" }}>{movie.title}</h3>
        <p style={{ margin: "0 0 5px 0" }}>{movie.description}</p>
        <p style={{ margin: 0 }}>Note: {movie.rating} / 5</p>
      </div>
    </div>
  );
};

export default MovieCard;
