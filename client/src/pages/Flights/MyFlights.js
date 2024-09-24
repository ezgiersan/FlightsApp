import React from "react";
import { useSelector } from "react-redux";
import SortBy from "./SortBy";
import thy from "../../pictures/thy.png";
import { Row, Col } from "react-bootstrap";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function MyFlights() {
  const myFlights = useSelector((state) => state.myFlights.data);

  const getStops = (x) => {
    if (x <= 2) {
      return "Nonstop";
    } else if (x === 3) {
      return "1 Stop";
    } else if (x > 3) {
      return "2+ Stop";
    }
  };


  return (
    <div className="my-flights-container">
      <SortBy />
      {myFlights?.map((i) => (
        <div key={i.id} className="my-flights-card">
          <Row>
            <Col sm={12} md={5}>
              <div className="d-flex ">
                <img src={thy} className="airline-img me-1" />
                <div className="w-100">
                  <span className="font-size-20">{`${moment(
                    i.scheduleTime,
                    "HH:mm:ss"
                  ).format("h:mm A")} - ${moment(i.estimatedLandingTime).format(
                    "h:mm A"
                  )}`}</span>
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <span>Delta Airlines</span>
                      <div className="d-flex align-items-center blue font-size-12">
                        <span className="me-1">Flight Details</span>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </div>
                    </div>
                    <div>
                      <p className="mb-0">
                        {getStops(i.route.destinations.length)}
                      </p>
                      <span className="gray">
                        Saat
                      </span>
                    </div>
                    <div>
                      <p className="mb-0">{`${i.route.destinations[0]} to ${
                        i.route.destinations?.[1]
                          ? i.route.destinations?.[1]
                          : "AMS"
                      }`}</p>
                      <span className="gray">{i.flightName}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col
            sm={12}
              md={7}
              className="price-container"
            >
              <div className="my-flight-price">
                <p className="font-weight-700 font-size-18">$156</p>
                <span className="gray font-size-12">Main</span>
              </div>
              <div className="my-flight-price">
                <p className="font-weight-700 font-size-18">$204</p>
                <span className="gray font-size-12">Comfort+</span>
              </div>
              <div className="my-flight-price-empty">
                <span className="gray font-size-12">- - -</span>
              </div>
              <div className="my-flight-price">
                <p className="font-weight-700 font-size-18">$386</p>
                <span className="gray font-size-12">Delta One</span>
              </div>
              <div className="my-flight-price-empty">
                <span className="gray font-size-12">- - -</span>
              </div>
            </Col>
          </Row>
        </div>
      ))}
      <div></div>
    </div>
  );
}
