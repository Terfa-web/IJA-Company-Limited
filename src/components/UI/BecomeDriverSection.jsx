import React from "react";
import "../../styles/become-driver.css";
import { Container, Row, Col } from "reactstrap";
import trainingImg from "../../assets/all-images/training.jpg";

const BecomeDriverSection = () => {
  return (
    <section className="become__driver">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12" className="become__driver-img">
            <img
              src={trainingImg}
              alt=""
              className="w-100 img-fluid training-image rounded"
            />
          </Col>

          <Col lg="6" md="6" sm="12">
            <h2 className="section__title become__driver-title">
              Internationally trained professional. With latest Services.
            </h2>
            {/* <button className="btn become__driver-btn mt-4">
              Become a Driver
            </button> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
