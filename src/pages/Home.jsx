import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import movies from "../data/data";
import "./Home.css";
import MovieList from "../components/MovieList";
const Home = () => {
  const title = ["Fiction", "Non-fiction"];
  const action = movies.filter((item) => {
    return item.category === "Fiction";
  });
  const superhero = movies.filter((item) => {
    return item.category === "Non-fiction";
  });

  return (
    <div>
      <Nav />
      <MovieList category={action} title={title[0]} />
      <MovieList category={superhero} title={title[1]} />

      <Footer />
    </div>
  );
};

export default Home;
