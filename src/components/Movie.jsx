import React from "react";
import Nav from "./Nav";
import "./styles/Movie.css";
import movies from "../data/data";
import { useParams, Link } from "react-router-dom";
import Footer from "./Footer";
const Movie = () => {
  const { category, id } = useParams();
  const movie = movies.filter((item) => {
    return item.id == id && item.category == category;
  });

  return (
    <div className="containers">
      <Nav />
      <div className="movie-section">
        <img src={movie[0].src} height="250px" width="200px" />
        <div className="movie-details">
          <p className="desc">{movie[0].name}</p>
          <Link to={`/video/${category}/${id}`} className="button">
            Play Now
          </Link>
          <p className="desc">Rating : {movie[0].rating} / 5</p>
          <p className="desc">{movie[0].desc}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
