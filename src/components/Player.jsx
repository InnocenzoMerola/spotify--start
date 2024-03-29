import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Shuffle from "../assets/playerbuttons/shuffle.png";
import Prev from "../assets/playerbuttons/prev.png";
import Play from "../assets/playerbuttons/play.png";
import Next from "../assets/playerbuttons/next.png";
import Repeat from "../assets/playerbuttons/repeat.png";
import "../assets/css/style.css";

const Player = function () {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className=" h-100">
        <Col lg={10} className=" offset-lg-2">
          <Row className=" h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#i">
                  <img src={Shuffle} alt="shuffle" />
                </a>
                <a href="#i">
                  <img src={Prev} alt="prev" />
                </a>
                <a href="#i">
                  <img src={Play} alt="play" />
                </a>
                <a href="#i">
                  <img src={Next} alt="next" />
                </a>
                <a href="#i">
                  <img src={Repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
