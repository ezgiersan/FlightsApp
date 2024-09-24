import React from "react";
import plane from "../pictures/plane.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEarthAmerica, faTag } from "@fortawesome/free-solid-svg-icons";
import profile_picture from "../pictures/profilepicture.png"

export default function Navbar() {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <div className="brand-container">
        <img src={plane} width={40} height={40} />
        <span className="font-weight-700 font-size-16">PLANE SCAPE</span>
      </div>

      <div className="d-flex align-items-center user-info">
        <div className="d-flex align-items-center me-4">
          <FontAwesomeIcon icon={faTag} className="purple me-1" />
          <span className="font-weight-500">Deals</span>
        </div>

        <div className="d-flex align-items-center me-4">
          <FontAwesomeIcon icon={faEarthAmerica} className="purple me-1" />
          <span className="font-weight-500">Discover</span>
        </div>
        <div className="d-flex align-items-center">
          <img src={profile_picture} width={40} height={37}/>
          <span className="font-weight-500">Joane Smith</span>
        </div>
      </div>
    </div>
  );
}
