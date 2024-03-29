// import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

// import logo from "../assets/logo/logo.png";
// import { BiHome, BiBookOpen } from "react-icons/bi";

// import SearchedResult from "./SearchedResult";
// import { useState } from "react";
// import "../assets/css/style.css";
// import { useDispatch, useSelector } from "react-redux";
// import { getSearchedAction } from "../redux/actions";

// const Sidebar = function () {
//   const artistaCercato = useSelector((state) => state.ricerchati.artistSearch);

//   const dispatch = useDispatch();

//   const handleSearch = (event) => {
//     event.preventDefault();
//     if (artistaCercato.length > 0) {
//       dispatch(artistaCercato);
//     }
//   };

//   return (
//     <>
//       <Container>
//         <Row>
//           <Col xs={2}>
//             <nav className="navbar navbar-expand-md fixed-left justify-content-between" id="sidebar">
//               <div className="container flex-column align-items-start">
//                 <a className="navbar-brand" href="index.html">
//                   <img src={logo} alt="Spotify Logo" width="131" height="40" />
//                 </a>
//                 <button
//                   className="navbar-toggler"
//                   type="button"
//                   data-toggle="collapse"
//                   data-target="#navbarNavAltMarkup"
//                   aria-controls="navbarNavAltMarkup"
//                   aria-expanded="false"
//                   aria-label="Toggle navigation"
//                 >
//                   <span className="navbar-toggler-icon"></span>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//                   <div className="navbar-nav">
//                     <ul className="ps-1">
//                       <li>
//                         <a className="nav-item nav-link d-flex align-items-center" href="#i">
//                           <BiHome className="icons"></BiHome>&nbsp; Home
//                         </a>
//                       </li>
//                       <li>
//                         <a className="nav-item nav-link d-flex align-items-center" href="#i">
//                           <BiBookOpen className="bi bi-book-fill"></BiBookOpen>&nbsp; Your Library
//                         </a>
//                       </li>
//                       <li>
//                         <form className="input-group mt-3" onSubmit={handleSearch}>
//                           <input
//                             type="text"
//                             className="form-control"
//                             id="searchField"
//                             placeholder="Search"
//                             aria-label="Search"
//                             aria-describedby="basic-addon2"
//                             onChange={(e) => {
//                               dispatch(getSearchedAction(e.target.value));
//                             }}
//                           />
//                           <div className="input-group-append">
//                             <button
//                               className="btn btn-outline-secondary btn-sm h-100"
//                               type="submit"
//                               onClick={handleSearch}
//                             >
//                               GO
//                             </button>
//                           </div>
//                         </form>
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//               <div className="nav-btn">
//                 <button className="signup-btn" type="button">
//                   Sign Up
//                 </button>
//                 <button className="login-btn" type="button">
//                   Login
//                 </button>
//                 <div>
//                   <a href="#i">Cookie Policy</a> |<a href="#i"> Privacy</a>
//                 </div>
//               </div>
//             </nav>
//           </Col>
//         </Row>
//       </Container>
//       {/* {<SearchedResult />} */}
//     </>
//   );
// };

// export default Sidebar;

import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import logo from "../assets/logo/logo.png";
import { BiHome, BiBookOpen } from "react-icons/bi";
import MyMain from "./MyMain";

import { useState } from "react";
import "../assets/css/style.css";
import { getSearchedAction } from "../redux/actions";
import { useDispatch } from "react-redux";

const Sidebar = function () {
  const [music, setMusic] = useState("");

  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    if (music.trim() !== "") {
      dispatch(getSearchedAction(music));
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
                            <button className="btn btn-outline-secondary btn-sm h-100" onClick={handleSearch}>
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
      <MyMain />
    </>
  );
};

export default Sidebar;
