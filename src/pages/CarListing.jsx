import React from "react";
import { Container, Row, Col } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import carData from "../assets/data/carData";
import CarItem from "../components/UI/CarItem";

const CarListing = () => {
  return (
    <Helmet title="Products">
      <CommonSection title="Our Products" />

      <section>
        <Container>
          <Row>
            {/* <Col lg="12">
              <div className="d-flex align-items-center gap-3 mb-5">
                <span className="d-flex align-items-center gap-2">
                  <i class="ri-sort-asc"> Sort By</i>
                </span>

                <select name="" id="">
                  <option>Select</option>
                  <option value="low">Low to High</option>
                  <option value="high">High to Low</option>
                </select>
              </div>
            </Col> */}

            {carData.map((car) => (
              <CarItem car={car} key={car.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarListing;
