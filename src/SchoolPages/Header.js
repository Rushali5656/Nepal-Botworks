import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Row,
  Container,
} from "reactstrap";
import LandingPage from "./Carousal";
import AboutUs from "./AboutUs";
import Gallery from "./Gallery";
import CardComponents from "./CardComponents";
import Footer from "./Footer";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <Container fluid>
        <Row
          className="p-1"
          style={{ backgroundColor: "rgb(47,36,100)", color: "white" }}
        >
          <span className="p-2 mx-3 col-4 text-lg-start">Gyan Deep School</span>
          <span className="col-4 mt-2 text-lg-center">
            Contact Us: +6617878
          </span>
          <span
            className="col-3 text-lg-right mt-2 my-auto"
            style={{ margin: "auto" }}
          >
            Address: Golmadhi 7,Bhaktapur
          </span>
        </Row>

        <Navbar expand="md" light>
          <Row className="p-0">
            <NavbarBrand href="/" className="nav p-3">
              <img src="images/crop.png" alt="" />
            </NavbarBrand>

            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="pl-0" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/service">Service</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/partners">Partners</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Row>
        </Navbar>
      </Container>
      <LandingPage />

      <AboutUs />
      <Gallery />
      <CardComponents />
      <Footer />
    </header>
  );
}

export default Header;
