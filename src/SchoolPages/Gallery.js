import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import logo from "assets/img/logo.jpg";
import image2 from "assets/img/image2.jpg";
import image3 from "assets/img/image3.png";
import { motion } from "framer-motion";

const Gallery = () => {
  document.title = "Gallery | Velzon - React Admin & Dashboard Template";

  const [displayCategory, setCategory] = useState("All");
  const [toggle, setToggle] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const toggleModal = () => {
    setToggle(!toggle);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    toggleModal();
  };
  const gallery = [
    {
      src: logo,
      altText: "Where Learning is Limitless",
      caption: `Inspiring Minds, Shaping Futures`,
      title: "Working at a coffee shop",
      auther: "Nancy Martino",
      likes: "2.2K",
      comments: "1.3K",
      category: "Welcome",
    },
    {
      src: image2,
      altText: "Building Tomorrow's Leaders",
      caption: `Empowering Students for a Brighter Tomorrow`,
      title: "Fun day at the Hill Station",
      auther: "Henry Baird",
      likes: "2.2K",
      comments: "1.3K",
      category: "Tour",
    },
    {
      src: image2,
      altText: "Commitment to Excellence in Education",
      caption: `Nurturing Potential, Achieving Success`,
      title: "Welcome discussion with team",
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Programs",
    },
    {
      src: logo,
      altText: "Commitment to Excellence in Education",
      caption: `Nurturing Potential, Achieving Success`,
      title: "Welcome discussion with team",
      auther: "Ruby Griffin",
      likes: "2.2K",
      comments: "1.3K",
      category: "Field Visit",
    },
  ];

  return (
    <React.Fragment>
      <Container fluid>
        {/* <BreadCrumb title="Gallery" pageTitle="Pages" /> */}
        <h3
          className="text-center fs-22 mt-3"
          style={{
            color: "rgb(47,36,100)",
            fontWeight: "bold",
          }}
        >
          Gallery
        </h3>
        <Row className="px-4">
          <Col lg={12}>
            <div className="">
              <CardBody>
                <Row>
                  <Col lg={12}>
                    <div className="text-center">
                      <ul
                        className="list-inline categories-filter animation-nav"
                        id="filter"
                      >
                        <li className="list-inline-item">
                          <Button
                            to="#"
                            onClick={() => setCategory("All")}
                            className={
                              displayCategory === "All"
                                ? "categories active"
                                : "categories"
                            }
                            data-filter="*"
                          >
                            <div
                              style={{
                                color: "rgb(134,53,3)",
                                fontWeight: "bold",
                              }}
                            >
                              All
                            </div>
                          </Button>
                        </li>
                        <li className="list-inline-item">
                          <Button
                            to="#"
                            onClick={() => setCategory("Welcome")}
                            className={
                              displayCategory === "Welcome"
                                ? "categories active"
                                : "categories"
                            }
                            data-filter=".Welcome"
                          >
                            <div
                              style={{
                                color: "rgb(134,53,3)",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Welcome
                            </div>
                          </Button>
                        </li>
                        <li className="list-inline-item">
                          <Button
                            to="#"
                            onClick={() => setCategory("Field Visit")}
                            className={
                              displayCategory === "Field Visit"
                                ? "categories active"
                                : "categories"
                            }
                            data-filter=".Field Visit"
                          >
                            <div
                              style={{
                                color: "rgb(134,53,3)",
                                fontWeight: "bold",
                              }}
                            >
                              {" "}
                              Field Visit
                            </div>
                          </Button>
                        </li>
                        <li className="list-inline-item">
                          <Button
                            to="#"
                            onClick={() => setCategory("Programs")}
                            className={
                              displayCategory === "Programs"
                                ? "categories active"
                                : "categories"
                            }
                            data-filter=".Programs"
                          >
                            <div
                              style={{
                                color: "rgb(134,53,3)",
                                fontWeight: "bold",
                              }}
                            >
                              Programs
                            </div>
                          </Button>
                        </li>
                        <li className="list-inline-item">
                          <Button
                            to="#"
                            onClick={() => setCategory("Tour")}
                            className={
                              displayCategory === "Tour"
                                ? "categories active"
                                : "categories"
                            }
                            data-filter=".Tour"
                          >
                            <div
                              style={{
                                color: "rgb(134,53,3)",
                                fontWeight: "bold",
                              }}
                            >
                              Tour
                            </div>
                          </Button>
                        </li>
                      </ul>
                    </div>

                    <Row className="gallery-wrapper">
                      {gallery
                        .filter(
                          ({ category }) =>
                            displayCategory === category ||
                            displayCategory === "All"
                        )
                        .map(({ src, title, auther, likes, comments }, key) => (
                          <Col
                            xxl={3}
                            xl={4}
                            sm={6}
                            className="element-item Welcome Field Visit Tour"
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
                                      className="gallery-img img-fluid mx-auto rounded"
                                      src={src}
                                      alt=""
                                      onClick={() => openModal(src)}
                                    />
                                    <div className="gallery-overlay">
                                      <h5 className="overlay-caption">
                                        <div className="text-center p-2">
                                          {title}
                                        </div>
                                      </h5>
                                    </div>
                                  </Link>
                                </div>
                              </Card>
                            </motion.div>
                          </Col>
                        ))}
                    </Row>
                  </Col>
                </Row>
              </CardBody>
            </div>
          </Col>
        </Row>
      </Container>
      <Modal
        isOpen={toggle}
        toggle={toggleModal}
        size="xl"
        className="modal-dialog-centered"
      >
        <ModalBody>
          <button
            type="button"
            className="btn-close position-absolute top-0 end-0 m-3 mb-3"
            onClick={toggleModal}
          >
            Back
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="img-fluid modal-image-cover"
          />
        </ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default Gallery;
