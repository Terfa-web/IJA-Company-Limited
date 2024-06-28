import React, { useRef } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/all-images/IJAlog.jpeg";
import "../../styles/header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* =======header-top======= */}
      <div className="header-top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left d-flex flex-column flex-sm-row ">
                <span>Hot line.</span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +234-816-433-9452
                </span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +234-7080076841
                </span>
                <span className="header__top__help">
                  <i class="ri-phone-fill"></i> +234-704035999
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="#" className="d-flex align-items-center gap-1">
                  <i class="ri-map-pin-2-line"></i> Located-In-Abuja
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ======== header middle ====== */}
      <div className="header__middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home">
                    <div className="logo__container">
                      <img
                        className="img-fluid max-width-lg-40 max-width-md-25"
                        src={logo}
                        alt="company logo"
                      />
                    </div>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2 ">
                <span>
                  <i class="ri-earth-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Nigeria</h4>
                  <h6>FCT</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header__location d-flex align-items-center gap-2">
                <span>
                  <i class="ri-time-line"></i>
                </span>
                <div className="header__location-content">
                  <h4>Monday to Saturday</h4>
                  <h6>7am - 8pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className="d-flex align-items-center justify-content-end"
            >
              <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ======== main navigation ====== */}
      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
