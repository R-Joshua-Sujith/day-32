import React from "react";
import { Link } from "react-router-dom";
import "./styles/Nav.css";
const Nav = () => {
  return (
    <nav>
      <Link to="/" className="titles ">
        Books
      </Link>

      <div className="nav2">
        <Link to="/addbook" className="Child">
          Add Book
        </Link>
        <Link to="/book-database" className="Child">
          Book Database
        </Link>
        <Link to="/menu" className="Menu">
          <div>Menu</div>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
