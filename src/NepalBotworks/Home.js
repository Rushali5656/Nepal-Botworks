import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Button,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Form,
  FormGroup,
  Input,
} from "reactstrap";
import "../NepalBotworks/home.css";
import CustomNavbar from "./Navbar";
import LandingPage from "./LandingPage";
import Service from "./Service";
import AboutUs from "./AboutUs";
import Patner from "./Patner";
import Team from "./Team";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      color="primary"
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "50px",
        right: "50px",
        display: isVisible ? "inline" : "none",
        zIndex: 1000,
      }}
    >
      ↑
    </Button>
  );
};

const Home = () => {
  return (
    <div className="sub_page">
      <div>
        <CustomNavbar />
        <LandingPage />
        <Service />
        <AboutUs />
        <Patner />
        <Team />
        <ContactUs />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
};

export default Home;
