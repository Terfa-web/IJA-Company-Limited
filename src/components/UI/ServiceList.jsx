import React from "react";
import { Col } from "reactstrap";
import "../../styles/services-list.css";
import servicesData from "../../assets/data/serviceData";

const ServiceList = () => {
  return (
    <>
      {servicesData.map((service, index) => (
        <ServiceItem service={service} key={index} />
      ))}
    </>
  );
};

const ServiceItem = ({ service }) => (
  <Col lg="4" sm="6" className="mb-3">
    <div className="service__item ">
      <span className="mb-3 d-inline-block">
        <i class={service.icon} />
      </span>

      <h6>{service.title}</h6>
      <p className="section__description">{service.desc}</p>
    </div>
  </Col>
);

export default ServiceList;
