import React from "react";
import "./Website.css";
// import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsStars } from "react-icons/bs"; //for icon

const Packages = () => {
  return (
    <div>
      <>
        <div className="container">
          <section className="sec1">
            <div className="sec1-heading">
              <div className="destination">
                <span>Most Loved</span>
              </div>
            </div>

            <div className="sec1-packages">
              <div className="packages">
                <h1>Handpicked Packages</h1>
              </div>
            </div>

            <Row>
              <Col md={4}>
                <div className="sec1-img">
                  <img src="sec1-img1.png" alt="" />
                </div>
                <div class="card1">
                  <div class="card-content">
                    <div class="stars">
                      <img src="sec1-icon.png" alt="" />
                    </div>
                    <span class="badge">EUROPE</span>
                    <div className="place-name">
                      <h2>Spain</h2>
                    </div>
                    <p class="price">From $2,499</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="sec1-img">
                  <img src="sec1-img2.png" alt="" />
                </div>
                <div class="card2">
                  <div class="card-content">
                    <div class="stars">
                      <img src="sec1-icon.png" alt="" />
                    </div>
                    <span class="badge">EUROPE</span>
                    <div className="place-name">
                      <h2>Australia</h2>
                    </div>
                    <p class="price">From $2,499</p>
                  </div>
                </div>
              </Col>
              <Col md={4}>
                <div className="sec1-img">
                  <img src="sec1-img3.png" alt="" />
                </div>
                <div class="card3">
                  <div class="card-content">
                    <div class="stars">
                      <img src="sec1-icon.png" alt="" />
                    </div>
                    <span class="badge">EUROPE</span>
                    <div className="place-name">
                      <h2>Egypt</h2>
                    </div>
                    <p class="price">From $2,499</p>
                  </div>
                </div>
              </Col>
            </Row>
          </section>
        </div>
      </>
    </div>
  );
};

export default Packages;
