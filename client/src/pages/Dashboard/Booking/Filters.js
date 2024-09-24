import React, { useState } from "react";
import { useSelector } from "react-redux";
import Select from "../../../components/Select"

export default function Filters() {
  const arrivalTimes = ["5:00 AM - 11:59 AM", "12:00 PM - 5:59 PM"];
  const stops = [
    {
      id: 1,
      title: "Nonstop",
      price: "$230",
    },
    {
      id: 2,
      title: "1 Stop",
      price: "$230",
    },
    {
      id: 3,
      title: "2+ Stops",
      price: "$230",
    },
  ];

  const options = [
    {label: "Lowest Price" , value: "lowest_price"},
    {label: "Highest Price" , value: "highest_price"},
  ]
  const { data, loading, error } = useSelector((state) => state.allAirlines);
  const flights = useSelector((state) => state.allFlights.data.flights);

  const [selectedArrivalTime, setSelectedArrivalTime] = useState(0);
  const [selectedStop, setSelectedStop] = useState([1]);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedSortBy, setSelectedSortBy] = useState(options[0]);

  const handleChange = (event) => {
    setSelectedArrivalTime(Number(event.target.value));
  };
  const handleChangeStop = (event) => {
    const value = Number(event.target.value);
    setSelectedStop((prevOptions) =>
      prevOptions.includes(value)
        ? prevOptions.filter((option) => option !== value)
        : [...prevOptions, value]
    );
  };

  const handleChangeAirlines = (event) => {
    const value = Number(event.target.value);
    setSelectedAirlines((prevOptions) =>
      prevOptions.includes(value)
        ? prevOptions.filter((option) => option !== value)
        : [...prevOptions, value]
    );
  };

  const handleSelectChange = (val) => {
    setSelectedSortBy(val)
  }

  return (
    <>
    {
      flights !== undefined ?
      <div className="container mt-3">
      <div className="content">
      <div className="mb-4">
        <p className="font-weight-700 font-size-14">Sort by:</p>
        <Select options={options} onSelectChange={handleSelectChange} />
      </div>
      {/* ARRIVAL TIME */}
      <div className="mb-4">
        <p className="font-weight-700 font-size-14">Arrival Time</p>
        {arrivalTimes.map((i, index) => (
          <label key={index} className="w-100 d-flex align-items-center">
            <input
              type="radio"
              value={index}
              checked={selectedArrivalTime === index}
              onChange={handleChange}
            />
            <span className="ms-1">{i}</span>
          </label>
        ))}
      </div>
      {/* STOPS */}
      <div className="mb-4">
        <p className="font-weight-700 font-size-14">Stops</p>
        {stops.map((i) => (
          <div
            key={i.id}
            className="d-flex align-items-center justify-content-between"
          >
            <label className="w-100 d-flex align-items-center">
              <input
                type="checkbox"
                value={i.id}
                checked={selectedStop.includes(i.id)}
                onChange={handleChangeStop}
              />
              <span className="ms-1">{i.title}</span>
            </label>
            <span className="ms-1">{i.price}</span>
          </div>
        ))}
      </div>
      {/* AIRLINES INLUDED */}
      <div>
        <p className="font-weight-700 font-size-14">Airlines Included</p>
        {data?.airlines?.map((i) => (
          <div
            key={i.nvls}
            className="d-flex align-items-center justify-content-between"
          >
            <label className="w-100 d-flex align-items-center">
              <input
                type="checkbox"
                value={i.nvls}
                checked={selectedAirlines.includes(i.nvls)}
                onChange={handleChangeAirlines}
              />
              <span className="ms-1">{i.publicName}</span>
            </label>
            <span className="ms-1">$230</span>
          </div>
        ))}
      </div>
      </div>
    </div> 
    : ""
    }
   
    </>
  );
}
