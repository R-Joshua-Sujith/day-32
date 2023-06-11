import React from "react";
import "./styles/AddMovie.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import movies from "../data/data";
import Nav from "./Nav";
const EditMovie = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [bookId, setId] = useState();
  const [imageURL, setImageURL] = useState("");
  const [movieName, setMovieName] = useState("");
  const [movieDescription, setMovieDescription] = useState("");
  const [movieRating, setMovieRating] = useState("");
  const [movieCategory, setMovieCategory] = useState("");
  const [videoURL, setVideoURL] = useState("");
  const getMovie = async () => {
    const book = movies.filter((book) => {
      return book.id == id;
    });

    setId(book[0].id);
    setImageURL(book[0].src);
    setMovieName(book[0].name);
    setMovieDescription(book[0].desc);
    setMovieRating(book[0].rating);
    setMovieCategory(book[0].category);
    setVideoURL(book[0].link);
  };
  useEffect(() => {
    getMovie();
  }, []);
  const options = [
    {
      value: "Fiction",
    },
    {
      value: "Non-fiction",
    },
  ];

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

  const edit = async (id) => {
    if (
      imageURL === "" ||
      movieName === "" ||
      movieDescription === "" ||
      movieCategory === "" ||
      movieRating === "" ||
      videoURL === ""
    ) {
      alert("Please fill all the fields");
    } else {
      const index = movies.findIndex((books) => books.id == bookId);
      const obj = {
        id: bookId,
        src: imageURL,
        name: movieName,
        desc: movieDescription,
        rating: movieRating,
        category: movieCategory,
        link: videoURL,
      };
      movies[index] = obj;
      alert("Book Edited Successfully");
      navigate("/book-database");
    }
  };
  return (
    <div>
      <Nav />
      <h1 className="headingg">Edit Movie</h1>
      <div className="movieForm">
        <div className="subForm">
          <input
            type="text"
            placeholder="Enter Book ID"
            value={bookId}
            onChange={idHandler}
          />
          <input
            type="text"
            placeholder="Enter Movie Image URL"
            value={imageURL}
            onChange={imageURLHandler}
          />
          <input
            type="tex"
            placeholder="Enter Movie Name"
            value={movieName}
            onChange={movieNameHandler}
          />
          <textarea
            cols="30"
            rows="5"
            placeholder="Enter Movie Description"
            value={movieDescription}
            onChange={movieDescriptionHandler}
          ></textarea>
        </div>
        <div className="subForm">
          <input
            type="number"
            placeholder="Enter Movie Rating"
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
            placeholder="Enter Movie Link"
            onChange={videoURLHandler}
            value={videoURL}
          />
        </div>
      </div>

      <div className="button" onClick={() => edit(id)}>
        Edit Movie
      </div>
    </div>
  );
};

export default EditMovie;
