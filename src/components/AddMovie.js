import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL) return;

    addMovie({ title, description, posterURL, rating: Number(rating) });

    // Réinitialiser le formulaire
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="text"
        placeholder="URL de l'image"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        style={{ marginRight: "10px" }}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Note"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        style={{ marginRight: "10px", width: "60px" }}
      />
      <button type="submit">Ajouter le film</button>
    </form>
  );
};

export default AddMovie;
