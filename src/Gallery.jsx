import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Gallery = () => {
  return (
    <div>
      <>
        <div className="container">
          <div className="sec3">
            <div className="sec3-heading">
              <div className="destination">
                <span>Attraction</span>
              </div>
            </div>

            <div className="sec3-packages">
              <div className="packages">
                <h1>Place of Interest</h1>
              </div>
            </div>

            <div className="sec3-desc">
              <p>
                Explore world-famous landmarks, rich heritage, and unforgettable
                architecture that reflect the soul of every destination. From
                ancient wonders to modern marvels, experience cultures through
                carefully crafted journeys designed for international travelers
                seeking elegance, comfort, authenticity, seamless planning, and
                meaningful memories across inspiring global locations.
              </p>
            </div>

            <Row className="g-0">
              <Col lg={3} md={6} sm={12}>
                <div className="sec3-imgs">
                  <img
                    src="sec3_img1.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="sec3-imgs">
                  <img
                    src="sec3_img2.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="sec3-imgs">
                  <img
                    src="sec3_img3.png"
                    alt=""
                  />
                </div>
              </Col>
              <Col lg={3} md={6} sm={12}>
                <div className="sec3-imgs">
                  <img
                    src="sec3_img4.png"
                    alt=""
                  />
                </div>
              </Col>
            </Row>

          </div>
        </div>
      </>
    </div>
  );
};

export default Gallery;
