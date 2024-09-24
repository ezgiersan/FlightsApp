import React from "react";
import { Row, Col } from "react-bootstrap";
import OtherOptions from "./OtherOptions"
import Booking from "./Booking";
import Navbar from "../../components/Navbar";

export default function index() {
  return (
    <Row className="dashboard-container">
      <Col md={12}>
      <Navbar/>
      </Col>
      <Col md={9} lg={10}>
        <Booking />
      </Col>
      <Col md={3} lg={2} className="other-options">
        <OtherOptions />
      </Col>
    </Row>
  );
}
