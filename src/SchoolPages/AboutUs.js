import React from "react";
import { Col, Container, Row } from "reactstrap";
import principal from "assets/img/Principal.jpg";
import { motion } from "framer-motion";

function AboutUs() {
  const colVariants = {
    hidden: { x: -100 },
    visible: { x: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      <Container fluid className="px-5 mx-4">
        <h3
          className="text-center fs-22 mt-3"
          style={{
            color: "rgb(47,36,100)",
            fontWeight: "bold",
          }}
        >
          About Us
        </h3>
        <Row>
          <Col lg={6}>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={colVariants}
            >
              <h5
                style={{
                  color: "rgb(134,53,3)",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Principal's Message
              </h5>
              <p className="text-start fs-4">
                Welcome to Gyan Deep School. I am Dr. Anjali Sharma, honored to
                serve as your Principal. With over 20 years in education, I am
                dedicated to fostering an environment where every student is
                valued and inspired to reach their highest potential. At Gyan
                Deep School, we blend academic excellence with character
                development, creativity, and critical thinking. Our committed
                team of educators provides a supportive and stimulating learning
                environment, encouraging students to explore their passions and
                talents. We believe in a collaborative approach, actively
                involving parents and the community in our educational journey.
                Our goal is to prepare students to thrive in an ever-changing
                world, leveraging the latest educational technologies and
                methodologies. Join us in this exciting journey of discovery and
                growth. Together, we can unlock each student's potential and
                empower them to make a positive impact on the world.
              </p>
              <p>
                Warm regards, Dr. Anjali Sharma{" "}
                <div>Principal, Gyan Deep School</div>
              </p>
            </motion.div>
          </Col>

          <Col lg={6} className="mt-5">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={colVariants}
            >
              <img
                src={principal}
                alt="Imagee"
                className="d-block w-100 rounded"
                style={{ height: "355px", objectFit: "cover" }}
              />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AboutUs;
