import React from "react";
// import React, { useState } from 'react'

import "./Website.css";
// import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaRegArrowAltCircleRight } from "react-icons/fa"; //for icon
import { MdOutlineSlowMotionVideo } from "react-icons/md"; //for icon
// for phone size

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <>
        <div className="container">
          <header>
            <nav>
              <Row>
                <Col>
                  <div className="logo">
                    {/* <img src="/logo.png" alt="" /> */}
                    <img src="logo3.png" alt="" />
                  </div>
                </Col>
                <Col xs={6}>
                  <div className="menu">
                    <ul>
                      <li>
                        <a href="">Home</a>
                      </li>
                      <li>
                        <a href="">Packages</a>
                      </li>
                      <li>
                        <a href="">About Us</a>
                      </li>
                      <li>
                        <a href="">Places</a>
                      </li>
                      <li>
                        <a href="">Contact</a>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <div className="book-btn">
                    <div className="box">
                      <span>Plan Your Trip</span>
                    </div>
                  </div>
                
                <div className="menu-btn-col text-end">
                  <Button variant="outline-dark" onClick={() => setShow(true)}>
                    ☰
                  </Button>
                </div>
                </Col>
              </Row>
              <Offcanvas
                show={show}
                onHide={() => setShow(false)}
                placement="end"  className="bg-color"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="mobile-menu">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Packages</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Places</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <div className="plan-trip">
                        <div className="box1">
                          <span>Plan Your Trip</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </Offcanvas.Body>
              </Offcanvas>
            </nav>
          </header>

          {/* main section */}
          <section>
            <div className="main-sec">
              <Row>
                <Col xs={12} md={6}>
                  <div className="main-div">
                    <div className="travel-text">
                      <p>Experience Luxury Travel</p>
                    </div>

                    <div className="travel-heading">
                      <h1>Explore the World Like Never Before</h1>
                    </div>

                    <div className="travel-par">
                      <p>
                        Curated journeys to the world's most extraordinary
                        destinations. Let us transform your travel dreams into
                        unforgettable memories.
                      </p>
                    </div>

                    <div className="btns">
                      <div className="planning">
                        <span>Start Planning</span>
                        <a href="">
                          <FaRegArrowAltCircleRight />
                        </a>
                      </div>
                      <div className="video">
                        <a href="">
                          <MdOutlineSlowMotionVideo />
                        </a>
                        <span>Watch Video</span>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={12} md={6}>
                  <div className="border">
                    <img
                      src="header-sec.png"
                      alt=""
                    />
                  </div>
                </Col>
              </Row>
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default Header;
