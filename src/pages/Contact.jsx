import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import "../styles/contact.css";

const socialLinks = [
  { url: "#", icon: "ri-facebook-line" },
  { url: "#", icon: "ri-instagram-line" },
  { url: "#", icon: "ri-linkedin-line" },
  { url: "#", icon: "ri-twitter-line" },
];

const Contact = () => {
  return (
    <Helmet title="Contact">
      <CommonSection title="Contact" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="7">
              <h5 className="fw-bold mb-4"> Get In Touch</h5>

              <Form>
                <FormGroup className="contact__form">
                  <Input type="text" placeholder="Your Name" />
                </FormGroup>

                <FormGroup className="contact__form">
                  <Input type="Email" placeholder="Your Name" />
                </FormGroup>

                <FormGroup className="contact__form">
                  <textarea
                    rows="10"
                    placeholder="Message"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Send Message
                </button>
              </Form>
            </Col>

            <Col lg="4" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  {" "}
                  13, Amadu Bello Street, Ikoyi, Lagos.
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Phone:</h6>
                  <p className="section__description mb-0">+234-675-454-96</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">n.terfa@yahoo.com</p>
                </div>

                <h6 className="fw-bold mt-4">Follow Us</h6>

                <div className="d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((link, index) => (
                    <Link
                      to={link.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={link.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
