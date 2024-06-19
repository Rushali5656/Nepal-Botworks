import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Botwork from "../assets/img/crop.png";
import fb from "../assets/img/fb.png";
import linkin from "../assets/img/linkedin.png";
import twitter from "../assets/img/twitter.png";
import insta from "../assets/img/instagram.png";

function CustomNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <Navbar color="lighter" light expand="md" >
      <Container>
            <img
              src={Botwork}
              alt="Nepal Botworks"
              className="img-fluid"
              style={{ height: "40px" }}
            />
        <NavbarBrand href="/">
          <Link to="/home">
           
            <span className="text-heading fs-12 pl-3">Nepal</span>{" "}
            <span className="text-red fs-12">Botworks</span>
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isOpen && (
              <NavItem className="ml-auto">
                <button
                  class="navbar-toggler"
                  id="navbar_global"
                  onClick={toggleNavbar}
                >
                  <span></span>
                  <span></span>
                </button>
              </NavItem>
            )}
            <NavItem>
              <NavLink
                to="/home"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/gallery"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/contact"
                className="nav-link"
                activeClassName="active"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Menu
                  </DropdownToggle>
                  <DropdownMenu left>
                    <DropdownItem
                      tag={Link}
                      to="/blog"
                      onClick={() => setIsOpen(false)}
                    >
                      Blog
                    </DropdownItem>
                    <DropdownItem
                      tag={Link}
                      to="/faq"
                      onClick={() => setIsOpen(false)}
                    >
                      FAQ
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </NavItem>
          </Nav>
            <div className="info_social ms-2">
              <span className="mx-1">
                <a
                  href="https://www.facebook.com/profile.php?id=61557855965257"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img src={fb} alt="Facebook" className="social-icon-fb" />
                </a>
              </span>
              <span className="mx-1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img
                    src={twitter}
                    alt="Twitter"
                    className="social-icon-twitter"
                  />
                </a>
              </span>
              <span className="mx-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img
                    src={linkin}
                    alt="LinkedIn"
                    className="social-icon-linkedin"
                  />
                </a>
              </span>
              <span className="mx-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <img
                    src={insta}
                    alt="Instagram"
                    className="social-icon-instagram"
                  />
                </a>
              </span>
            </div>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;
