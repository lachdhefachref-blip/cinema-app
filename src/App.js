import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un film sur les rêves.",
      posterURL: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg",
      rating: 5
    },
    {
      title: "Titanic",
      description: "Une histoire d'amour sur le Titanic.",
      posterURL: "https://m.media-amazon.com/images/I/71w7yMqCIPL._AC_SL1178_.jpg",
      rating: 4
    },
    {
      title: "Avengers: Endgame",
      description: "Les super-héros affrontent Thanos.",
      posterURL: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
      rating: 5
    },
    {
      title: "The Dark Knight",
      description: "Batman affronte le Joker.",
      posterURL: "https://m.media-amazon.com/images/I/51k0qa6zDML._AC_.jpg",
      rating: 5
    },
    {
      title: "Interstellar",
      description: "Un voyage à travers l'espace et le temps.",
      posterURL: "https://m.media-amazon.com/images/I/71y9AlVQ7hL._AC_SY679_.jpg",
      rating: 5
    }
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  const addMovie = (newMovie) => {
    setMovies(prev => [...prev, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ma Liste de Films</h1>

      <AddMovie addMovie={addMovie} />
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
