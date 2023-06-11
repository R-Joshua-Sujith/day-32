import React from "react";
import { Link } from "react-router-dom";
import "./styles/MovieList.css";
const MovieList = (props) => {
  return (
    <div>
      <div className="title">{props.title}</div>
      <div className="Movies-Section">
        <div className="Movies">
          {props.category.map((item) => (
            <Link to={`/${item.category}/${item.id}`}>
              <img
                className="images"
                src={item.src}
                height="200px"
                width="150px"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
