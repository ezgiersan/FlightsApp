import {
  faPlane,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAction } from "../../../redux/action/getAction";
import FlightSelect from "../../../components/FlightSelect";
import iataCodes from "../../../utils/iata.json";
import Date from "../../../components/Date";
import moment from "moment";
import showToast from "../../../utils/ToastService";

export default function BookFlight({ sendFlightsData }) {
  const [activeBtn, setActiveBtn] = useState(1);

  const [firstPlaceValue, setFirstPlaceValue] = useState("");
  const [secondPlaceValue, setSecondPlaceValue] = useState("");
  const [firstDateValue, setFirstDateValue] = useState("");
  const [secondDateValue, setSecondDateValue] = useState("");

  const dispatch = useDispatch();

  const changeBtn = (id) => {
    setActiveBtn(id);
  };

  const fetchFlights = () => {
    var queryParams = {};

    if (activeBtn === 1) {
      if (
        !firstPlaceValue ||
        !secondPlaceValue ||
        !firstDateValue ||
        !secondDateValue
      ) {
        showToast('Please fill in all fields.', 'error');
        return; 
      }
      // Tarih kontrolü
      if (firstDateValue && secondDateValue) {
        const startDate = moment(firstDateValue);
        const endDate = moment(secondDateValue);
        const diffInDays = endDate.diff(startDate, "days");

        // 3 günden farklıysa hata ver
        if (diffInDays > 3) {
        showToast('The date interval is not valid. Allowed days between the from and to dates is 3.', 'error');
          return;
        }
      }
      queryParams={
        fromScheduleDate: firstDateValue,
        toScheduleDate: secondDateValue,
        // route: `${firstPlaceValue},${secondPlaceValue}`,
        route: firstPlaceValue,
      }
    } else if (activeBtn === 2) {
      if (!firstPlaceValue || !secondPlaceValue || !firstDateValue) {
        showToast('Please fill in all fields.', 'error');
        return; 
      }
      queryParams={
        fromScheduleDate: firstDateValue,
        // route: `${firstPlaceValue},${secondPlaceValue}`,
        route: firstPlaceValue,
      }
    }
    dispatch(
      getAction("flights", queryParams)
    );
  };

  const firstPlaceValueChange = (value) => {
    setFirstPlaceValue(value);
  };

  const secondPlaceValueChange = (value) => {
    setSecondPlaceValue(value);
  };

  const firstDateChange = (value) => {
    setFirstDateValue(value);
  };

  const secondDateChange = (value) => {
    setSecondDateValue(value);
  };

  return (
    <>
      <div className="white-card">
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faPlane} className="me-2" />
            <p className="mb-0 font-weight-700">BOOK YOUR FLIGHT</p>
          </div>

          <div>
            <Button
              className={`left-button purple-button ${
                activeBtn === 1 ? "active" : ""
              }`}
              onClick={() => changeBtn(1)}
            >
              Round trip
            </Button>
            <Button
              className={`right-button purple-button ${
                activeBtn === 2 ? "active" : ""
              }`}
              onClick={() => changeBtn(2)}
            >
              One way
            </Button>
          </div>
        </div>

        <Row>
          <Col md={6}>
            <div className="d-flex align-items-center my-2">
              <FlightSelect
                inputType={"left-input"}
                options={iataCodes}
                onValueChange={firstPlaceValueChange}
                definitionIcon={faPlaneDeparture}
              />
              <FlightSelect
                inputType={"right-input"}
                options={iataCodes}
                onValueChange={secondPlaceValueChange}
                definitionIcon={faPlaneArrival}
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="d-flex align-items-center my-2">
              <Date
                inputType={` border-gray w-99 h-input datepicker-input ${activeBtn === 2 ? "date-input" : "left-input"}`}
                onValueChange={firstDateChange}
              />
              {activeBtn === 1 ? (
                <Date
                  inputType={
                    "right-input border-gray w-99 h-input datepicker-input"
                  }
                  onValueChange={secondDateChange}
                />
              ) : (
                ""
              )}
            </div>
          </Col>
        </Row>

        <Button className="dark-purple-button" onClick={() => fetchFlights()}>
          Show flights
        </Button>
      </div>
    </>
  );
}
