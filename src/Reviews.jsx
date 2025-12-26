import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoIosStarHalf } from "react-icons/io";

const Reviews = () => {
  return (
    <div>
      <>
        <div className="container">
          <div className="sec5">
            <div className="sec5-heading">
              <div className="destination">
                <span>SIGNATURE</span>
              </div>
            </div>

            <div className="sec5-packages">
              <div className="packages">
                <h1>What Travelers Say</h1>
              </div>
            </div>

            <Row className="review">
              <Col xs={12} md={6} lg={6}>
                <div className="rev-card">
                  <div className="card-star">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <IoIosStarHalf />
                  </div>

                  <div className="rev-text">
                    <p>
                      The tour was perfectly organized, with helpful guides, comfortable accommodations, and unique experiences that made our vacation truly remarkable.
                    </p>
                  </div>

                  <div className="rev-pro">
                    <div className="rev-img">
                      <img src="sec5-rev1.jpeg" alt="" />
                      <p>Sophia Ray</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} md={6} lg={6}>
                <div className="rev-card">
                  <div className="card-star">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <IoIosStarHalf />
                  </div>

                  <div className="rev-text">
                    <p>
                      Highly recommend for organized tours, perfectly organized, friendly staff, and unique experiences that make exploring new places special.
                    </p>
                  </div>

                  <div className="rev-pro">
                    <div className="rev-img">
                      <img src="sec5-rev2.jpeg" alt="" />
                      <p>Daniel Cole</p>
                    </div>
                  </div>
                </div>
              </Col>
      
              <Col xs={12} md={6} lg={6}>
                <div className="rev-card">
                  <div className="card-star">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <IoIosStarHalf />
                  </div>

                  <div className="rev-text">
                    <p>
                      The tour professionalism and attention to detail made our trip effortless, and filled with wonderful, unforgettable experiences, exploring places
                    </p>
                  </div>

                  <div className="rev-pro">
                    <div className="rev-img">
                      <img src="sec5-rev3.jpeg" alt="" />
                      <p>Isabell Ford</p>
                    </div>
                  </div>
                </div>
              </Col>

              <Col xs={12} md={6} lg={6}>
                <div className="rev-card">
                  <div className="card-star">
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                    <MdOutlineStarPurple500 />
                  </div>

                  <div className="rev-text">
                    <p>
                      Their service exceeded expectations, offering friendly staff, and unique experiences that made our adventure relaxing, exciting, and unforgettable.
                    </p>
                  </div>

                  <div className="rev-pro">
                    <div className="rev-img">
                      <img src="sec5-rev4.jpeg" alt="" />
                      <p>James Lee</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    </div>
  );
};

export default Reviews;
