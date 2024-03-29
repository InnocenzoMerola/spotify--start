import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Artist from "./Artist";
import { useSelector } from "react-redux";

const MyMain = function () {
  const results = useSelector((state) => state.ricercati.artistSearch);
  return (
    <Col xs={12} md={9} className="offset-md-3 mainPage px-3">
      <Row>
        <Col xs={9} lg={11} className=" d-none d-md-flex mt-4 mainLinks">
          <a href="#i">TRENDING</a>
          <a href="#i">PODCAST</a>
          <a href="#i">MOODS AND GENRES</a>
          <a href="#i">NEW RELEASES</a>
          <a href="#i">DISCOVER</a>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          {results && results.length === 0 ? (
            <>
              <div id="searchResults" style={{ display: "none" }}></div>
            </>
          ) : (
            <div id="searchResults">
              <h2>Search Results</h2>
              <Row xs={1} sm={2} lg={3} xl={4} className=" imgLinks py-3">
                {results.map((result) => (
                  <Col className="text-center" key={result.id}>
                    <img className="img-fluid" src={result.album.cover_medium} alt="track" />
                    <p>
                      Track: {result.title.length < 16 ? result.title : result.title.substring(0, 16)} <br />
                      Artist: {result.artist.name}
                    </p>
                  </Col>
                ))}
              </Row>
            </div>
          )}
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="rock">
            <h2>Rock Classic</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className=" imgLinks py-3" id="rockSection">
              <Artist singer="queen" />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="popSection">
              <Artist singer="katy perry" />
            </Row>
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row xs={1} sm={2} lg={3} xl={4} className="imgLinks py-3" id="hipHopSection">
              <Artist singer="eminem" />
            </Row>
          </div>
        </Col>
      </Row>
    </Col>
  );
};
export default MyMain;
