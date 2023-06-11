import React from "react";
import Nav from "../components/Nav";
import movies from "../data/data";
import { useParams } from "react-router-dom";
import "../components/styles/VideoPlay.css";
import Footer from "../components/Footer";
const VideoPlay = () => {
  const { category, id } = useParams();
  const movie = movies.filter((item) => {
    return item.id == id && item.category == category;
  });
  return (
    <div>
      <Nav />
      <div className="video">
        <iframe
          src={movie[0].link}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <div className="movie-detailss">
          <p className="desc">{movie[0].name}</p>
          <p className="desc">Rating : {movie[0].rating} / 5</p>
          <p className="desc">{movie[0].desc}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideoPlay;
