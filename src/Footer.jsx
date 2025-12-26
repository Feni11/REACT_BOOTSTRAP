import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Footer = () => {
  return (
    <div>
      <>
        <div className="footer" style={{ backgroundImage: "url(/footer-bg.png)" }}>
          {/* <div className="footer-img">
            <img src="footer-bg.png" alt="" />
          </div> */}
          <div className="container">
            <Row className="footer-text">

              <Col xs={6} md={3} lg={3}>
                <h5>Trip Types</h5>
                <ul className="footer-list">
                  <li>Cultural</li>
                  <li>Dog-friendly</li>
                  <li>Friends Only</li>
                  <li>Home Stay</li>
                  <li>Nature Walk</li>
                </ul>
              </Col>

              <Col xs={6} md={3} lg={3}>
                <h5>Activities</h5>
                <ul className="footer-list">
                  <li>Hiking</li>
                  <li>Hot Air Balloons</li>
                  <li>Cultural Tours</li>
                  <li>River Rafting</li>
                  <li>Road Cycling</li>
                </ul>
              </Col>

              <Col xs={6} md={3} lg={3}>
                <h5>Destinations</h5>
                <ul className="footer-list">
                  <li>Dubai</li>
                  <li>Singapore</li>
                  <li>Bali</li>
                  <li>Thailand</li>
                  <li>Vietnam</li>
                </ul>
              </Col>

              <Col xs={6} md={3} lg={3}>
                <h5>Contact Us</h5>
                <p>
                  <strong>Address:</strong> <span>37 Taleb Street, Dubai,
                  United Arab.</span>
                </p>
                <p>
                  <strong>Phone:</strong> <span>+91 509183806</span> 
                </p>
                <p>
                  <strong>Email:</strong> <span>info@rightviewtourism.com</span>
                </p>
              </Col>

            </Row>
          </div>
        </div>
      </>
    </div>
  );
};

export default Footer;
