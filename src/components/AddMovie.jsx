import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./styles/AddMovie.css";
import movies from "../data/data";
const AddMovie = () => {
  const options = [
    {
      value: "Fiction",
    },
    {
      value: "Non-fiction",
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

      alert(`Book "${movieName}" Added under "${movieCategory}" Category`);
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
  return (
    <div>
      <h1 className="headingg">Add Book</h1>
      <div className="movieForm">
        <div className="subForm">
          <input
            type="number"
            placeholder="Enter Book ID"
            value={id}
            onChange={idHandler}
          />
          <input
            type="text"
            placeholder="Enter Book Image URL"
            value={imageURL}
            onChange={imageURLHandler}
          />
          <input
            type="tex"
            placeholder="Enter Book Name"
            value={movieName}
            onChange={movieNameHandler}
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter Book Description"
            value={movieDescription}
            onChange={movieDescriptionHandler}
          ></textarea>
        </div>
        <div className="subForm">
          <input
            type="number"
            placeholder="Enter Book Rating"
            onChange={movieRatingHandler}
            value={movieRating}
          />
          <select
            name="cars"
            id="cars"
            onChange={movieCategoryHandler}
            value={movieCategory}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <input
            type="text"
            placeholder="Enter Audio Book Link"
            onChange={videoURLHandler}
            value={videoURL}
          />
        </div>
      </div>

      <div className="button" onClick={submitHandler}>
        Add Book
      </div>
      <Link to="/book-database" className="moviedatabase">
        Book Database
      </Link>
    </div>
  );
};

export default AddMovie;
