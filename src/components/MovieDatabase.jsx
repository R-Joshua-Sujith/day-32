import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/MovieDataBase.css";
import movies from "../data/data";
import Nav from "./Nav";
const MovieDatabase = () => {
  const [length, setlength] = useState(movies.length);
  useEffect(() => {}, [length]);
  const options = [
    {
      value: "action",
    },
    {
      value: "marvel",
    },
  ];
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieCategory, setMovieCategory] = useState(options[0].value);
  const [videoURL, setVideoURL] = useState("");

  const idHandler = (event) => {
    setId(event.target.value);
  };
  const imageURLHandler = (event) => {
    setImageURL(event.target.value);
  };
  const movieNameHandler = (event) => {
    setMovieName(event.target.value);
  };
  const movieDescriptionHandler = (event) => {
    setMovieDescription(event.target.value);
  };
  const movieRatingHandler = (event) => {
    setMovieRating(event.target.value);
  };

  const movieCategoryHandler = (event) => {
    setMovieCategory(event.target.value);
  };

  const videoURLHandler = (event) => {
    setVideoURL(event.target.value);
  };
  const submitHandler = () => {
    if (id == "" || imageURL == "" || movieName == "") {
      alert("Please Fill all the fields");
    } else {
      const obj = {
        id: id,
        src: imageURL,
        name: movieName,
        desc: movieDescription,
        rating: movieRating,
        category: movieCategory,
        link: videoURL,
      };

      movies.push(obj);

      alert(`Movie "${movieName}" Added under "${movieCategory}" Category`);
      setId("");
      setImageURL("");
      setMovieName("");
      setMovieDescription("");
      setMovieRating("");
      setMovieCategory("");
      setVideoURL("");
      navigate("/");
    }
  };

  const edit = (id) => {
    navigate(`/edit/${id}`);
  };
  return (
    <div className="container">
      <Nav />

      <h1>Book Database</h1>
      <div className="grid">
        <div className="heading">
          <div>ID</div>
          <div>Name</div>
          <div>Rating</div>
          <div>Category</div>
        </div>

        {movies.map((movie) => (
          <div className="table">
            <input value={movie.id} />
            <input value={movie.name} />
            <input value={movie.rating} />
            <input value={movie.category} />

            <button
              onClick={() => {
                edit(movie.id);
              }}
            >
              Edit
            </button>
            <button
              onClick={() => {
                movies.splice(
                  movies.findIndex((film) => film.id === movie.id),
                  1
                );
                setlength(movies.length);
                alert(`Book "${movie.name}"  has been deleted`);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieDatabase;
