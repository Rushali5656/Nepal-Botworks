import React from "react";
import Footer from "NepalBotworks/Footer";
import CustomNavbar from "NepalBotworks/Navbar";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import suman from "../../assets/img/suman.jpg";
import suraj from "../../assets/img/suraj.jpg";
import deen from "../../assets/img/deen.png";
import { motion } from "framer-motion";
import "../Blog/Blog.css";

import Breadcrumbs from "Common/BreadCrumbs";

const BlogPage = () => {
  const messages = [
    {
      id: 2,
      info: "At the heart of our mission lies a commitment to advancing education through practical knowledge, igniting progress across the nation. This blog serves as a platform where we share our reflections, experiences, and insights with you. Our aim is to inspire and enlighten, offering diverse perspectives that enrich the educational discourse. We invite you to join us on this journey of discovery and growth, where we explore the transformative power of learning. Together, let's foster a community dedicated to enhancing the quality and impact of education, ensuring its role as a cornerstone of societal development.",
      name: "Sooraj Majhi",
      img: suraj,
    },
    {
      id: 1,
      info: "Our primary objective is to enhance education by imparting practical knowledge to drive national progress. Through this blog, we passionately share our thoughts, experiences, and insights, aiming to inspire and inform our readers. We believe in the transformative power of education to uplift communities and individuals alike. Join us in exploring diverse topics and perspectives that contribute to improving educational quality. Together, let's cultivate a space where ideas flourish, and learning becomes a catalyst for positive change. Welcome to our journey of fostering a deeper understanding and appreciation for the role of education in shaping our future.",
      name: "Suman Jyakhwo",
      img: suman,
    },
    {
      id: 3,
      info: "Our mission is to elevate education by emphasizing practical knowledge, driving national advancement. This blog is our canvas, where we paint thoughts, experiences, and insights to inspire and inform. We're dedicated to exploring diverse perspectives that enrich the educational landscape. Join us on this journey of discovery and growth as we delve into the transformative power of learning. Together, let's build a community committed to enhancing the quality and impact of education, ensuring its pivotal role in shaping a brighter future for all.",
      name: "Deenbandhu Chaudhary",
      img: deen,
    },
  ];

  return (
    <>
      <CustomNavbar />
      <Breadcrumbs
        items={[{ title: "Home", link: "/home" }, { title: "Blog" }]}
      />
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="text-center mb-4 text-heading services-heading">
              Welcome to Our Blog
            </h2>
          </Col>
        </Row>
        <Row className="mx-1">
          {messages.map((message) => (
            <p key={message.id}>
              <Card className="blog-card">
                <div className="text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src={message.img}
                      alt=""
                      className="rounded-circle avatar-md mx-auto d-block img-fluid mb-4 mt-4"
                      style={{ height: "300px", width: "300px" }}
                    />
                  </motion.div>
                </div>
                <CardBody>
                  <CardTitle tag="h4" className="text-subheading">
                    Message from {message.name}
                  </CardTitle>
                  <CardText>{message.info}</CardText>
                  <div className="text-center pt-3">
                    <strong>Best Regards</strong>
                    <div className="text-bold">{message.name}</div>
                    <div>Co-Founder</div>
                  </div>
                </CardBody>
              </Card>
            </p>
          ))}
        </Row>
        <Row>
          <Col md={12}>
            <h2 className="text-center text-heading services-heading ">
              Recent Blog Posts
            </h2>
          </Col>
          <Col md={4} className="mt-3 mb-3">
            <h4 className="text-muted">No Blog Posts Yet</h4>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default BlogPage;
