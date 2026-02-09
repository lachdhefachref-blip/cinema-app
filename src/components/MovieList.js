import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {movies.length === 0 ? (
        <p>Aucun film ne correspond aux filtres.</p>
      ) : (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      )}
    </div>
  );
};

export default MovieList;
