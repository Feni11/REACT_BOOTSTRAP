import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About_us = () => {
  return (
    <div>
      <>
        <div className="container d-flex justify-content-center align-items-center">
          <div className="sec4">
            <div className="sec4-heading">
              <div className="destination">
                <span>Who We Are?</span>
              </div>
            </div>

            <div className="sec4-main">
              <Row>
                <Col xs={12} md={6}>
                  <div className="sec4-img">
                    <img
                      src="https://hridoywebdev.com/tf/hd/vtravel-demo/assets/images/about.png"
                      alt=""
                    />
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="sec4-expert">
                    <h1>We are Travel experts</h1>
                    <p>
                      We are passionate travel experts dedicated to crafting unforgettable journeys. With in-depth knowledge of destinations and a love for exploration, we design personalized itineraries that blend comfort, adventure, and unique experiences. From planning seamless logistics to discovering hidden gems, we ensure every trip is memorable and stress-free. Whether it’s a family holiday, solo adventure, or group tour, our goal is to create travel experiences that inspire, delight, and leave lasting memories.
                    </p>
                    <div className="sec4-btn">
                      <span>Learn More</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default About_us;
