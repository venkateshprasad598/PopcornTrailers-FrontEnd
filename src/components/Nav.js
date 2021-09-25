import React from "react";
import "./Nav.css";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = () => {
  const [show, setshow] = useState(false);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       setshow(true);
  //     } else {
  //       setshow(false);
  //     }
  //   });

  //   return () => {
  //     window.removeEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         setshow(true);
  //       } else {
  //         setshow(false);
  //       }
  //     });
  //   };
  // }, [setshow]);

  return (
    // <div className={`nav ${show && "nav_black"}`}></div>
    <div className="nav nav_black">
      <Link className="nav_logo" to="/">
        <h1>MOVIE </h1>
        <p>DATABASE</p>
      </Link>

      <Link to="/search" className="nav_avatar">
        <input
          type="text"
          placeholder="Search for movies"
          className="nav_avatar"
        />
      </Link>
    </div>
  );
};
export default Nav;
