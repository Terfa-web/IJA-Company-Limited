import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/ija-company.jpeg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">
                Solar Panel and CCTV Cameras Installation Services
              </h2>
              <p className="serction__description">
                At IJA Solar Company Limited, our mission is to pioneer a new
                era in Nigeria where every household and business harnesses the
                abundant, free, and easily accessible solar energy available on
                our continent. Our vision is to achieve this by empowering
                individuals and businesses, one customer at a time, to fully
                transition to solar power. With our central office in Maraba,
                close to Abuja, Nigeria. Our dedicated teams of salespeople, and
                engineers are committed to ensuring that our products and
                services provide unparalleled value to our customers. We aim to
                expand our presence, establishing branches across all 36 states
                in Nigeria. We are passionate about guiding you on your solar
                journey. Let’s take the first step together toward a brighter,
                more sustainable future with IJA Solar Company Limited.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"> Trained Engineers.</i>
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    {" "}
                    After sales service support.
                  </i>
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"> High-Quality Products.</i>
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line">
                    {" "}
                    Comprehensive Warranties.
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
