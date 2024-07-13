import React from "react";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import AboutSection from "../components/UI/AboutSection";
import ServiceList from "../components/UI/ServiceList";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import Testimonial from "../components/UI/Testimonial";

const Home = () => {
  return (
    <Helmet title="Home">
      <section className="p-0 hero__slider-section">
        {/* =========== hero section =========== */}
        <HeroSlider />
      </section>

      {/* ================ about section ============== */}
      <AboutSection />

      {/* =========== services section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">See our</h6>
              <h2 className="section__title">Popular Services</h2>
            </Col>

            <ServiceList />
          </Row>
        </Container>
      </section>

      {/* ============= car offer section ============ */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {carData.slice(0, 6).map((car) => (
              <CarItem car={car} key={car.id} />
            ))}
          </Row>
        </Container>
      </section>

      {/* ============= become a driver section =============== */}
      <BecomeDriverSection />

      {/* ======== Testimonial section =========== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle">What Our clients say</h6>
              <h2 className="section__title">Testimonials</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      {/* =========== blog section =========== */}
      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Explore our blogs</h6>
              <h2 className="section__title ">Latest</h2>
            </Col>
          </Row>
        </Container>
      </section> */}
    </Helmet>
  );
};

export default Home;
