
import React, {useEffect, useState} from "react";
import { Col, Row } from "react-bootstrap";
import BookFlight from "./BookFlight";
import Filters from "./Filters";
import Flights from "./Flights";
import {useDispatch} from "react-redux"
import { getAction } from "../../../redux/action/getAction";
import MobilFilters from "./MobilFilters";

export default function Index() {
  const [flights, setFlights] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAction("airlines"))
  }, [])
  
  const flightsData = (data) => {
    setFlights(data)
  }
  return (
    <Row>
      <Col md={12}>
        <BookFlight sendFlightsData={flightsData}/>
      </Col>
      <Col md={12} className="mobil-filter">
        <MobilFilters />
      </Col>
      <Col sm={8} md={8} lg={9} >
        <Flights flights={flights} />
      </Col>
      <Col sm={4} md={4} lg={3} className="p-0 filters">
        <Filters />
      </Col>
    </Row>
  );
}
