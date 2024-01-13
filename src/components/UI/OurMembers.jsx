import React from "react";
import "../../styles/our-members.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import ava01 from "../../assets/all-images/ava-1.jpg";
import ava02 from "../../assets/all-images/ava-2.jpg";
import ava03 from "../../assets/all-images/ava-3.jpg";

const ourMembers = [
  {
    name: "Shekina Albright",
    experience: "5 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },

  {
    name: "Fanni Wisdom",
    experience: "6 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava02,
  },

  {
    name: "Keediyeh Clinsent",
    experience: "8 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava03,
  },

  {
    name: "Sunday Gloria",
    experience: "9 years of experience",
    fbUrl: "#",
    instUrl: "#",
    twitUrl: "#",
    linkedinUrl: "#",
    imgUrl: ava01,
  },
];

const OurMembers = () => {
  return (
    <>
      {ourMembers.map((member, index) => (
        <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
          <div className="single__member">
            <div className="single__member-img">
              <img src={member.imgUrl} alt="" className="w-100" />

              <div className="single__member-social">
                <Link to={member.fbUrl}>
                  <i class="ri-facebook-line"></i>
                </Link>

                <Link to={member.twitUrl}>
                  <i class="ri-twitter-line"></i>
                </Link>

                <Link to={member.linkedinUrl}>
                  <i class="ri-linkedin-line"></i>
                </Link>

                <Link to={member.instUrl}>
                  <i class="ri-instagram-line"></i>
                </Link>
              </div>
            </div>

            <h6 className="text-center mb-0 mt-3">{member.name}</h6>
            <p className="section__description text-center">
              {member.experience}
            </p>
          </div>
        </Col>
      ))}
    </>
  );
};

export default OurMembers;
