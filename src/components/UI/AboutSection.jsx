import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const AboutSection = () => {
  return (
    <section className="about__section">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title"> Welcome to car rent services</h2>
              <p className="serction__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                assumenda quam rerum cumque dolorum, explicabo neque dolorem
                provident atque voluptatem!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    {" "}
                    Lorem ipsum dolor sit amet.
                  </i>
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    {" "}
                    Lorem ipsum dolor sit amet.
                  </i>
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    {" "}
                    Lorem ipsum dolor sit amet.
                  </i>
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    {" "}
                    Lorem ipsum dolor sit amet.
                  </i>
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
