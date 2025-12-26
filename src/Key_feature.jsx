import React from "react";
import "./Website.css";
// import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaPlane } from "react-icons/fa";
import { FaPersonHiking } from "react-icons/fa6";
import { FaBath } from "react-icons/fa";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapMarkedAlt, FaFlag } from "react-icons/fa";

const Key_feature = () => {
  return (
    <>
      <div className="container">
        <div className="sec2">
          <div className="sec2-heading">
            <div className="destination">
              <span>Why Choose Us</span>
            </div>
          </div>

          <div className="sec2-packages">
            <div className="packages">
              <h1>Unforgettable Journeys</h1>
            </div>
          </div>
          <Row>
            <Col xs={12} lg={4} md={6}>
              <div className="feature-item">
                <div className="item">
                  <div className="icon">
                    <FaPlane />
                  </div>
                  <h3>Customized Trips</h3>
                  <div className="sec2-info">
                    <p>
                      We create personalized travel plans tailored to your
                      interests budget and style ensuring smooth memorable
                      journeys always worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} md={6}>
              <div className="feature-item">
                <div className="item">
                  <div className="icon">
                    <FaPersonHiking />
                  </div>
                  <h3>Adventure Tours</h3>
                  <div className="sec2-info">
                    <p>
                      Embark on exciting adventures such as trekking, diving, rafting, expertly guided for maximum safety and unforgettable experiences across the globe.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} md={6}>
              <div className="feature-item">
                <div className="item">
                  <div className="icon">
                    <FaBath />
                  </div>
                  <h3>Luxury Vacations</h3>
                  <div className="sec2-info">
                    <p>
                      Experience premium travel with luxury hotels private
                      transport fine dining spa services comfort elegance and
                      relaxation worldwide experiences
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs={12} lg={4} md={6}>
              <div className="feature-item">
                <div className="item">
                  <div className="icon">
                    <FaMapMarkedAlt />
                  </div>
                  <h3>Expert Travel Guides</h3>
                  <div className="sec2-info">
                    <p>
                      Travel with confidence alongside experienced international guides who ensure safety, share knowledge, and enhance every journey worldwide.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} md={6}>
              <div className="feature-item">
                <div className="item">
                  <div className="icon">
                    <FaPhoneAlt />
                  </div>
                  <h3>24/7 Customer Support</h3>
                  <div className="sec2-info">
                    <p>
                      Our dedicated support team is available around the clock to assist you before, during, and after your trip for a stress-free travel experience.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={4} md={6}>
              <div className="feature-item">
                <div className="item">
                  <div className="icon">
                    <FaHandHoldingDollar />
                  </div>
                  <h3>Best Price Guarantee</h3>
                  <div className="sec2-info">
                    <p>
                      We offer competitive pricing with transparent costs, ensuring you receive exceptional value without compromising comfort, quality, or experience.
                    </p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Key_feature;
