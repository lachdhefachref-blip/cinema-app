import React, { useState } from "react";

const AddMovie = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description || !posterURL || rating <= 0) return alert("Remplissez tous les champs correctement!");
    addMovie({ title, description, posterURL, rating });
    setTitle(""); setDescription(""); setPosterURL(""); setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <input placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <input placeholder="URL de l'affiche" value={posterURL} onChange={(e) => setPosterURL(e.target.value)} />
      <input type="number" min="0" max="5" placeholder="Note" value={rating} onChange={(e) => setRating(Number(e.target.value))} />
      <button type="submit">Ajouter Film</button>
    </form>
  );
};

export default AddMovie;
