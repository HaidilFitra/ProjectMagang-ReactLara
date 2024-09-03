import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LoginModal from "./loginModal";

const Navigation = () => {
  const [changeColor, SetChangeColor] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const changeBG = () => {
    if (window.scrollY > 100) {
      SetChangeColor(true);
    } else {
      SetChangeColor(false);
    }
  };

  useEffect(() => {
    changeBG();

    window.addEventListener("scroll", changeBG);

    const token = localStorage.getItem("Authorization");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    const token = localStorage.getItem("Authorization");

    axios
      .delete("http://localhost:8000/api/v1/logout", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })  
      .then(() => {
        localStorage.removeItem("Authorization");
        setIsAuthenticated(false);
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          changeColor ? "color-active" : ""
        }`}
      >
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} width="50" height="50" alt="Logo"></img>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link to="/visimisi" className="nav-link">
                  Informasi
                </Link>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link" href="#">
                  Event
                </a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link">Gallery</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link">Praktikum</a>
              </li>
              <div className="dropdown">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Authentication
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {isAuthenticated ? (
                    <li>
                      <a className="dropdown-item" href="#" onClick={handleLogout}>
                        Logout
                      </a>
                    </li>
                  ) : (
                    <>
                      <li>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-toggle="modal"
                          data-bs-target="#loginModal"
                        >
                          Login
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Register
                        </a>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      <LoginModal onLogin={() => setIsAuthenticated(true)} />
    </>
  );
};

export default Navigation;
