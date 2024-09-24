
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function SortBy() {
  return (
    <div className="d-flex align-items-center justify-content-between mb-4">
      <div>
        <span>Sort by:</span>
        <span className="font-weight-700 ms-1">Recommended</span>
      </div>
      <div className="d-flex align-items-center">
        <FontAwesomeIcon icon={faCircleInfo} className="blue"/>
        <span className="ms-1 me-2">Avg Fare:</span>
        <span className="font-weight-700">$225</span>

      </div>
    </div>
  );
}
