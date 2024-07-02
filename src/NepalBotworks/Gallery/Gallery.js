import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Breadcrumbs from "Common/BreadCrumbs";
import CustomNavbar from "NepalBotworks/Navbar";
import Footer from "NepalBotworks/Footer";
import { EmbeddedVideo, FacebookProvider } from "react-facebook";
import Greenland from "assets/img/Greenland Workshop.jpg";
import Greenland1 from "assets/img/Greeland1.jpg";
import Greenland3 from "assets/img/Greenland5.jpg";
import Greenland4 from "assets/img/Greenland2.jpg";
import BalUddhar from "assets/img/Bal Uddhar.jpg";
import BalUddhar1 from "assets/img/Bal Uddhar1.jpg";
import BalUddhar2 from "assets/img/Bal Uddhar2.jpg";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Gallery = () => {
  const [displayCategory, setCategory] = useState("All");
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gallery = [
    {
      src: Greenland,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Greenland Workshop",
    },
    {
      src: Greenland4,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Greenland Workshop",
    },
    {
      src: Greenland1,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Greenland Workshop",
    },
    {
      src: Greenland3,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Greenland Workshop",
    },
    {
      src: BalUddhar,
      altText: "Commitment to Excellence in Education",
      caption: `Nurturing Potential, Achieving Success`,
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Bal Uddhar Workshop",
    },
    {
      src: BalUddhar1,
      altText: "Commitment to Excellence in Education",
      caption: `Nurturing Potential, Achieving Success`,
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Bal Uddhar Workshop",
    },
    {
      src: BalUddhar2,
      altText: "Commitment to Excellence in Education",
      caption: `Nurturing Potential, Achieving Success`,
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Bal Uddhar Workshop",
    },
  ];

  const video = [
    {
      link: "https://www.facebook.com/reel/1580562855853365",
    },
    {
      link: "https://www.facebook.com/reel/438650282240506",
    },
    {
      link: "https://www.facebook.com/61557855965257/videos/439988118991364",
    },
  ];

  const filteredGallery = gallery.filter(
    ({ category }) => displayCategory === category || displayCategory === "All"
  );

  const handleImageClick = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

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

  return (
    <React.Fragment>
      <ScrollToTopButton />
      <CustomNavbar />
      <Breadcrumbs
        items={[{ title: "Home", link: "/" }, { title: "Gallery" }]}
      />
      <Container>
        <Row>
          <Col lg={12}>
            <h2 className="text-subheading services-heading text-start">
              Photos
            </h2>
            <div className="text-start mt-3">
              <ul
                className="list-inline categories-filter animation-nav"
                id="filter"
              >
                <li className="list-inline-item">
                  <Button
                    to="#"
                    onClick={() => setCategory("All")}
                    className={`categories ${
                      displayCategory === "All" ? "active" : ""
                    } mt-2`}
                    data-filter="*"
                  >
                    <div style={{ color: "black", fontWeight: "bold" }}>
                      All
                    </div>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    to="#"
                    onClick={() => setCategory("Greenland Workshop")}
                    className={`categories ${
                      displayCategory === "Greenland Workshop"
                        ? "categories active"
                        : "categories"
                    } mt-2`}
                    data-filter=".Greenland Workshop"
                  >
                    <div style={{ color: "black", fontWeight: "bold" }}>
                      Greenland Workshop
                    </div>
                  </Button>
                </li>
                <li className="list-inline-item">
                  <Button
                    to="#"
                    onClick={() => setCategory("Bal Uddhar Workshop")}
                    className={`categories ${
                      displayCategory === "Bal Uddhar Workshop"
                        ? "categories active"
                        : "categories"
                    } mt-2`}
                    data-filter=".Bal Uddhar Workshop"
                  >
                    <div style={{ color: "black", fontWeight: "bold" }}>
                      Bal Uddhar Workshop
                    </div>
                  </Button>
                </li>
              </ul>
            </div>

            <Row className="gallery-wrapper">
              {filteredGallery.map(
                ({ src, title, auther, likes, comments }, key) => (
                  <Col
                    xxl={3}
                    xl={4}
                    sm={6}
                    className="element-item Greenland Workshop Bal Uddhar Workshop Tour"
                    key={key}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Card className="gallery-box mb-3 mt-3">
                        <div className="gallery-container">
                          <Link className="image-popup" to="#" title="">
                            <img
                              className="gallery-img img-fluid w-100 mx-auto rounded"
                              src={src}
                              alt=""
                              onClick={() => handleImageClick(key)}
                              style={{ height: "300px", objectFit: "cover" }}
                            />
                            {/* <div className="gallery-overlay">
                              <div className="overlay-caption text-center p-2">
                                <p>{title}</p>
                                <p>{auther}</p>
                                <p>{likes} Likes</p>
                                <p>{comments} Comments</p>
                              </div>
                            </div> */}
                          </Link>
                        </div>
                      </Card>
                    </motion.div>
                  </Col>
                )
              )}
            </Row>
          </Col>
        </Row>
        <h2 className="mt-3 text-subheading text-start services-heading">
          Video
        </h2>
        <Row className="mt-3">
          {video.map((video, index) => (
            <Col lg={4} key={index} className="mb-3">
              <FacebookProvider appId="your-app-id">
                <EmbeddedVideo href={video.link} style={{ height: "20px" }} />
              </FacebookProvider>
            </Col>
          ))}
        </Row>
      </Container>

      {isOpen && (
        <div>
          <Lightbox
            mainSrc={filteredGallery[photoIndex].src}
            nextSrc={
              filteredGallery[(photoIndex + 1) % filteredGallery.length].src
            }
            prevSrc={
              filteredGallery[
                (photoIndex + filteredGallery.length - 1) %
                  filteredGallery.length
              ].src
            }
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex(
                (photoIndex + filteredGallery.length - 1) %
                  filteredGallery.length
              )
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % filteredGallery.length)
            }
            imageCaption={filteredGallery[photoIndex].caption}
          />
          <Button
            color="primary"
            onClick={() => setIsOpen(false)}
            style={{
              position: "fixed",
              top: "100px",
              left: "30px",
              zIndex: 2000,
            }}
          >
            Back
          </Button>
        </div>
      )}
      <Footer />
    </React.Fragment>
  );
};

export default Gallery;
