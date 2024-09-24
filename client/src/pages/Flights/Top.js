import { faChevronDown, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import starBlack from "../../pictures/black-star.png";
import starGray from "../../pictures/star-gray.png";

export default function Top() {
  return (
    <div className="d-flex align-items-center justify-content-between py-2 px-3 flights-top">
      <div>
        <Button className="btn-border font-size-13 font-weight-600 me-2">
          Times
        </Button>
        <Button className="btn-border font-size-13 font-weight-600 me-2">
          Stops
        </Button>
        <Button className="btn-border font-size-13 font-weight-600 me-2">
          Airlines
        </Button>
        <Button className="btn-border font-size-13 font-weight-600 me-2">
          Airports
        </Button>
        <Button className="btn-border font-size-13 font-weight-600 me-2">
          Amenities
        </Button>
        <Link to={"#"} className="font-size-13 text-decoration-none">
          Edit Search
        </Link>
      </div>
      <div className="star-container">
        <div className="">
          <div>
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
            <img src={starGray} className="star-img" />
          </div>
          <div>
            <img src={starGray} className="star-img" />
            <img src={starGray} className="star-img" />
            <img src={starGray} className="star-img" />
          </div>
        </div>
        <div className="vertical-line mx-3"></div>
        <div className="">
          <div>
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
          </div>
          <div>
            <img src={starGray} className="star-img" />
            <img src={starGray} className="star-img" />
            <img src={starGray} className="star-img" />
          </div>
        </div>
        <div className="vertical-line mx-3"></div>
        <div className="">
          <div>
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
          </div>
          <div>
            <img src={starBlack} className="star-img" />
            <img src={starGray} className="star-img" />
            <img src={starGray} className="star-img" />
          </div>
        </div>
        <div className="vertical-line mx-3"></div>
        <div className="">
          <div>
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
          </div>
          <div>
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
            <img src={starGray} className="star-img" />
          </div>
        </div>
        <div className="vertical-line mx-3"></div>
        <div className="">
          <div>
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
          </div>
          <div>
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
            <img src={starBlack} className="star-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
