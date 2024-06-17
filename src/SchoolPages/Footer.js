import React from "react";
import { Col, Container, Row } from "reactstrap";

function Footer() {
  return (
    <div className="px-5">
      <Container fluid>
        <Row>
          <Col lg={6}>
            <p>Contact Us</p>

            <div>Liwali-08, Bhaktapur</div>

            <div>Call: +977 9761 806 265</div>

            <div>info.nepalbotworks@gmail.com</div>
          </Col>
          <Col lg={6}>
            <iframe
              title="Nepal Botworks Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.4694009808104!2d85.43782767428428!3d27.671883476202925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb05006b04ab6b%3A0x6752b1e0d3cb50cb!2sNepal%20Botworks!5e0!3m2!1sen!2snp!4v1717139254109!5m2!1sen!2snp"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
