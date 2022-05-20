import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header
      className="header cont-shadow"
      style={{ width: "96rem", backgroundColor: "white" }}
    >
      <div className="logos">
        <Link to="/">
          <a>
            W <span className="logos-o">O</span>W Quiz
            <span className="logos-excla">!</span>
          </a>
        </Link>
      </div>
      <ul className="header-nav">
        <li style={{ marginTop: "0.25rem", cursor: "pointer" }}>
          <li style={{ cursor: "pointer" }}>
            <a href="https://github.com/MuskanChhatrasal">
              <i style={{ marginRight: "0.5rem" }}></i>
              Github
            </a>
          </li>
        </li>

        <li>
          <button className="menu">
            <i className="bi bi-list"></i>
          </button>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
