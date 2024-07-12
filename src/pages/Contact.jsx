import React from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import { Link } from "react-router-dom";
import "../styles/contact.css";

const socialLinks = [
  {
    url: "https://www.facebook.com/share/Vk6zjhxBiNCRv5GH/?mibextid=lOuIew",
    icon: "ri-facebook-line",
  },
  {
    url: "https://www.instagram.com/ija_solar_company_limited?igsh=NTJ2dWd1N2hvaWRo&utm_source=qr",
    icon: "ri-instagram-line",
  },
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
                {/* <FormGroup className="contact__form">
                  <Input type="text" placeholder="Your Name" />
                </FormGroup> */}

                {/* <FormGroup className="contact__form">
                  <Input type="Email" placeholder="Your Name" />
                </FormGroup> */}

                <FormGroup className="contact__form">
                  <textarea
                    className="text__area"
                    rows="150"
                    placeholder="
If you have any questions or need assistance, please don't hesitate to reach out to us using the contact details provided on our site. You can call us directly at the phone number listed, and our team will be happy to assist you. Additionally, you can send us an email at the provided address, and we promise to respond promptly. Our dedicated staff is always on hand to ensure your inquiries are addressed as quickly and efficiently as possible.

We also invite you to connect with us on social media. Follow us on Facebook and Instagram to stay updated on our latest products, services, and promotions. Feel free to send us a message through these platforms as well; we are committed to maintaining an active and responsive presence on social media.

Your satisfaction is our priority, and we are here to help with any concerns or questions you might have. Thank you for choosing us, and we look forward to hearing from you soon!"
                  ></textarea>
                </FormGroup>

                {/* <button className=" contact__btn" type="submit">
                  Send Message
                </button> */}
              </Form>
            </Col>

            <Col lg="4" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">Contact Information</h6>
                <p className="section__description mb-0">
                  {" "}
                  U20 Beside Midland Plaza, Maraba.
                </p>
                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Phone:</h6>
                  <p className="section__description mb-0">+234-816-433-9452</p>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">
                    ijasolarcompanyltd@gmail.com
                  </p>
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
