import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import AddMovie from "./components/AddMovie";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "Un film sur les rêves.",
      posterURL: "https://image-url.com/inception.jpg",
      rating: 5,
    },
    {
      title: "Titanic",
      description: "Une histoire d'amour sur le Titanic.",
      posterURL: "https://image-url.com/titanic.jpg",
      rating: 4,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState(0);

  // Ajouter un nouveau film
  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  // Filtrage des films
  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRating
  );

  return (
    <div>
      <h1>Ma Liste de Films</h1>

      <AddMovie addMovie={addMovie} />
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <MovieList movies={filteredMovies} />
    </div>
  );
};

export default App;
