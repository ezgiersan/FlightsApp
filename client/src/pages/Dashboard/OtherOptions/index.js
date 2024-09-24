import { faCar, faHotel, faUmbrellaBeach } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import car from "../../../pictures/car.jpeg";
import hotel from "../../../pictures/hotel.jpg"
import travel from "../../../pictures/travel.jpeg"
import { Row, Col } from "react-bootstrap";

import React from "react";

export default function index() {
  return (
    <Row>
    <Col md={12} className="options mb-3">
      <img src={car} className="img-fluid" />
      <div className="options-img-text">
        <FontAwesomeIcon icon={faCar} />
        <p>CAR RENTALS</p>
      </div>
    </Col>
        <Col md={12} className="options mb-3">
        <img src={hotel} className="img-fluid" />
        <div className="options-img-text">
          <FontAwesomeIcon icon={faHotel} />
          <p>HOTEL</p>
        </div>
      </Col>
      <Col md={12} className="options">
        <img src={travel} className="img-fluid" />
        <div className="options-img-text">
          <FontAwesomeIcon icon={faUmbrellaBeach} />
          <p>TRAVEL PACKAGES</p>
        </div>
      </Col>
    </Row>
  );
}
