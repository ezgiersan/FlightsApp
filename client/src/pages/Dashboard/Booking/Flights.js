import {
  faPlane,
  faPlaneArrival,
  faPlaneDeparture,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import moment from "moment";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PopUp from "../../../components/PopUp";
import { postAction } from "../../../redux/action/postAction";

export default function Flights() {
const [showPopup, setShowPopup] = useState(false);
const [selectedFlight, setSelectedFlight] = useState("");

const dispatch = useDispatch()


  const getStops = (x) => {
    if (x <= 2) {
      return "Nonstop";
    } else if (x === 3) {
      return "1 Stop";
    } else if (x > 3) {
      return "2+ Stop";
    }
  };

  const { data, loading, error } = useSelector((state) => state.allFlights);
  const airlines = useSelector((state) => state.allAirlines.data.airlines);


  const getAirlineBrand = (nvls) => {
    const airline = airlines.find(x => x.nvls === nvls);
    return airline ? airline.publicName : 'Airline Brand';
  }

  const BookTheFlight = (data) => {
    setShowPopup(true);
    setSelectedFlight(data)
  }
  const handleResetOrChoose = (b) => {
    console.log("b", b);
    setShowPopup(false);

    if(b === true){

      dispatch(postAction("save-flight", selectedFlight))
    }else{
      setSelectedFlight("")
    }

  }
  return (
    <>
    <div className="mt-3 flights-container">
      {data?.flights?.map((i) => (
        <div key={i.id}>
          <div className="flights-card ">
            <div>
              <span className="font-weight-700">Aalborg</span>
              <span className="font-weight-700"> - </span>
              <span className="font-weight-700">Amsterdam</span>
            </div>

            <div className="d-flex align-items-center justify-content-between padding-end-4">
              {/* departure */}
              <div>
                <div className="font-size-12">
                  <FontAwesomeIcon icon={faPlaneDeparture} />
                  <span className="ms-2">Departure</span>
                </div>

                <div className="font-weight-700">
                  {moment(i.scheduleTime, "HH:mm:ss").format("h:mm A")}
                </div>
                <div>Airport: {i.route.destinations[0]}</div>
              </div>
              <div>
                <div className="line"></div>
              </div>
              <div className="d-flex flex-column align-items-center">
                <p className="mb-0">{getAirlineBrand(i.airlineCode)}</p>
                <FontAwesomeIcon
                  icon={faPlane}
                  className="purple font-size-18 "
                />
                <div>
                <span className="mb-0">saat</span>
                <span>{`(${getStops(i.route.destinations.length)})`}</span>
                </div>
              </div>

              <div>
                <div className="line"></div>
              </div>

              {/* arrival */}
              <div>
                <div className="font-size-12">
                  <FontAwesomeIcon icon={faPlaneArrival} />
                  <span className="ms-2">Arrival</span>
                </div>

                <div className="font-weight-700">
                  {moment(i.estimatedLandingTime).format("h:mm A")}
                </div>
                <div>Airport: {i.route.destinations?.[1] || "arrival airport"}</div>
              </div>
            </div>

            <div className="d-flex align-items-center justify-content-between mt-4">
              <div className="mb-3">
                <p className="purple font-weight-800 font-size-16 mb-0">
                  Price: $200
                </p>
                <span className="font-size-12">Round trip</span>
              </div>
              <Button className="dark-purple-button book-flight-btn" onClick={()=> BookTheFlight(i)}>
                Book Flight
              </Button>
            </div>
          </div>
          <Button className="purple-button font-size-12 text-decoration-underline mb-3 check-flight-btn py-2">
            Check the details
          </Button>
        </div>
      ))}
    </div>
    <PopUp showPopup={showPopup} selectedValue={selectedFlight} resetOrChoose={handleResetOrChoose} />
    </>
  );
}
