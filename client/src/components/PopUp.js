import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";

export default function PopUp({
  showPopup,
  selectedValue,
  resetOrChoose,
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(showPopup);
  }, [showPopup]);

  const handleClose = () => {
    setShow(false);
    resetOrChoose(false);
  };
  const Booking = () => {
    setShow(false);
    resetOrChoose(true);
  }

  return (
    <Modal show={show} onHide={handleClose} size="sm" >
      <Modal.Header closeButton>
        <Modal.Title>Are you sure ?</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        You are booking flight <strong>{selectedValue?.flightNumber}</strong>?
      </Modal.Body>
      <Modal.Footer>
        <Button className="dark-purple-button w-100" onClick={Booking}>
          Book Flight
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
