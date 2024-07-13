import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

import "../../styles/testimonial.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          "Ija-Solar Company Limited provided exceptional service, installing
          our solar panels efficiently and with great professionalism
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava01} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Terwase Suu</h6>
            <p className="section__description"></p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p className="section__description">
          Thanks to Ija-Solar Company Limited, our new CCTV cameras were
          installed quickly and work perfectly. Highly recommend their services
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava02} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Mary Asuquo</h6>
            <p className="section__description">08061288489</p>
          </div>
        </div>
      </div>

      <div className="testimonial py-4 px-3">
        <p className="section__description">
          The team at Ija-Solar Company Limited delivered outstanding service,
          making our solar panel installation process smooth and hassle-free.
        </p>

        <div className="mt-3 d-flex align-items-center gap-4">
          <img src={ava03} alt="" className="w-25 h-25 rounded-2" />

          <div>
            <h6 className="mb-0 mt-3">Sunday Iga</h6>
            <p className="section__description">08061219645</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonial;
