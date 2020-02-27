import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import SearchForm from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import Alert from "../../components/Alert";
import ArticleContext from "../../utils/ArticleContext";
import API from "../../utils/API";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     
      <div id="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
            
          </li>
          <li className="nav-item">
            <Link
              to="/aboutme"
              className={
                window.location.pathname === "/aboutme" || window.location.pathname === "/aboutme"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact page
            </Link>
            
          </li>
          <li className="nav-item">
            <Link
              to="/contactpage"
              className={
                window.location.pathname === "/contactpage" || window.location.pathname === "/contactpage"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About me
            </Link>
            
          </li>
          <li className="nav-item">
            <Link
              to="/signup"
              className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
