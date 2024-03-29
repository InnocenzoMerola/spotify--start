import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import logo from "../assets/logo/logo.png";
import { BiHome, BiBookOpen } from "react-icons/bi";

import SearchedResult from "./SearchedResult";
import { useState } from "react";
import "../assets/css/style.css";

const Sidebar = function () {
  const [music, setMusic] = useState("");
  const [results, setResults] = useState([]);
  const fetchData = async (music, setResults) => {
    const myUrl = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${music}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        "X-RapidAPI-Key": "9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0",
      },
    };
    try {
      const response = await fetch(myUrl, options);
      const data = await response.json();
      setResults(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (music.length > 0) {
      fetchData(music, setResults);
      console.log("RESULTS: ", results);
    } else {
      setResults([]);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={2}>
            <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
              <div className="container flex-column align-items-start">
                <a className="navbar-brand" href="index.html">
                  <img src={logo} alt="Spotify Logo" width="131" height="40" />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <ul className="ps-1">
                      <li>
                        <a className="nav-item nav-link d-flex align-items-center" href="#i">
                          <BiHome className="icons"></BiHome>&nbsp; Home
                        </a>
                      </li>
                      <li>
                        <a className="nav-item nav-link d-flex align-items-center" href="#i">
                          <BiBookOpen className="bi bi-book-fill"></BiBookOpen>&nbsp; Your Library
                        </a>
                      </li>
                      <li>
                        <form className="input-group mt-3" onSubmit={handleSearch}>
                          <input
                            type="text"
                            className="form-control"
                            id="searchField"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                            onChange={(e) => {
                              setMusic(e.target.value);
                            }}
                          />
                          <div className="input-group-append">
                            <button
                              className="btn btn-outline-secondary btn-sm h-100"
                              type="submit"
                              onClick={handleSearch}
                            >
                              GO
                            </button>
                          </div>
                        </form>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="nav-btn">
                <button className="signup-btn" type="button">
                  Sign Up
                </button>
                <button className="login-btn" type="button">
                  Login
                </button>
                <div>
                  <a href="#i">Cookie Policy</a> |<a href="#i"> Privacy</a>
                </div>
              </div>
            </nav>
          </Col>
        </Row>
      </Container>
      {<SearchedResult results={results} setResults={setResults} />}
    </>
  );
};

export default Sidebar;
