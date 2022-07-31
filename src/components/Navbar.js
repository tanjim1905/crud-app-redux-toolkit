import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-link">
      <Link to="/">Home</Link>
      <Link to="/show-books">Show Books</Link>
      <Link to="/add-book">Add Book</Link>
    </div>
  );
};

export default Navbar;
