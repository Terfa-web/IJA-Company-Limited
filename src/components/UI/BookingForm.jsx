import React from "react";
import { Form, FormGroup } from "reactstrap";
import "../../styles/booking-form.css";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="First Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Last Name" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Phone Number" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="From Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="To Address" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Person</option>
          <option value="2 people">2 People</option>
          <option value="3 people">3 People</option>
          <option value="4 people">4 People</option>
          <option value="5 people">5 People</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 Luggage</option>
          <option value="2 luggages">3 Luggages</option>
          <option value="3 luggages">4 Luggages</option>
          <option value="4 luggages">2 Luggages</option>
          <option value="5 luggages">5 Luggages</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="date" placeholder="Journey Date" />
      </FormGroup>

      <FormGroup>
        <textarea
          row={5}
          type="textarea"
          className="textarea"
          placeholder="Write"
        ></textarea>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input
          type="time"
          placeholder="Journey Time"
          className="time__picker"
        />
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
