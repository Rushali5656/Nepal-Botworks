import Footer from "NepalBotworks/Footer";
import CustomNavbar from "NepalBotworks/Navbar";
import React, { useState } from "react";
import { Col, Collapse, Container, Input, Row } from "reactstrap";
import "../FAQ/fas.css";
import Breadcrumbs from "Common/BreadCrumbs";

function FAQ() {
  const [col1, setcol1] = useState(true);
  const [col2, setcol2] = useState(false);
  const [col3, setcol3] = useState(false);
  const [col4, setcol4] = useState(false);

  const t_col1 = () => {
    setcol1(!col1);
    setcol2(false);
    setcol3(false);
    setcol4(false);
  };

  const t_col2 = () => {
    setcol2(!col2);
    setcol1(false);
    setcol3(false);
    setcol4(false);
  };

  const t_col3 = () => {
    setcol3(!col3);
    setcol1(false);
    setcol2(false);
    setcol4(false);
  };

  const t_col4 = () => {
    setcol4(!col4);
    setcol1(false);
    setcol2(false);
    setcol3(false);
  };

  return (
    <div>
      <CustomNavbar />
      <Breadcrumbs items={[{ title: "Home", link: "/" }, { title: "FAQ" }]} />
      <Container>
        <Col lg={12}>
          <div>
            <div className="accordion " id="genques-accordion">
              <div className="accordion-item">
                <h6 className="accordion-header" id="genques-headingOne">
                  <button
                    className={`accordion-button ${!col1 ? "collapsed" : ""}`}
                    type="button"
                    onClick={t_col1}
                    style={{ cursor: "pointer" }}
                  >
                    1. What is Nepal Botworks?
                  </button>
                </h6>
                <Collapse isOpen={col1} className="accordion-collapse">
                  <div className="accordion-body">
                    Nepal Botworks is a prominent educational provider located
                    in Liwali 8, Bhaktapur. It specializes in offering
                    cutting-edge training and educational programs, likely
                    focusing on technology, robotics, and innovation. Situated
                    in the historical city of Bhaktapur, known for its rich
                    cultural heritage and traditional architecture, Nepal
                    Botworks leverages its location to provide a unique blend of
                    modern education within a culturally rich environment. The
                    institution aims to equip students with practical skills and
                    knowledge in various technological fields, preparing them
                    for the demands of the modern workforce.
                  </div>
                </Collapse>
              </div>
              <div className="accordion-item">
                <h6 className="accordion-header" id="genques-headingTwo">
                  <button
                    className={`accordion-button ${!col2 ? "collapsed" : ""}`}
                    type="button"
                    onClick={t_col2}
                    style={{ cursor: "pointer" }}
                  >
                    2. Why was Nepal Botworks established?
                  </button>
                </h6>
                <Collapse isOpen={col2} className="accordion-collapse">
                  <div className="accordion-body">
                    Nepal Botworks was established to advance technological
                    education and innovation in Nepal, addressing the critical
                    need for skilled professionals in fields such as robotics,
                    automation, and technology. By offering specialized training
                    and hands-on experience, it aims to equip students and
                    professionals with industry-relevant skills, fostering a
                    culture of innovation and enhancing employability. Nepal
                    Botworks seeks to bridge the skill gaps in the Nepalese
                    education system, promote STEM education, and contribute to
                    the country's economic development by preparing a workforce
                    capable of driving technological advancements and
                    entrepreneurship.
                  </div>
                </Collapse>
              </div>
              <div className="accordion-item">
                <h6 className="accordion-header" id="genques-headingThree">
                  <button
                    className={`accordion-button ${!col3 ? "collapsed" : ""}`}
                    type="button"
                    onClick={t_col3}
                    style={{ cursor: "pointer" }}
                  >
                    3. What courses does Nepal Botworks offer?
                  </button>
                </h6>
                <Collapse isOpen={col3} className="accordion-collapse">
                  <div className="accordion-body">
                    Nepal Botworks offers a diverse range of courses designed to
                    equip students with cutting-edge skills in various
                    technological fields. The courses include Robotics
                    Education, Web Development, Coding Bootcamps, Drone
                    Technology, and AI & Machine Learning. These programs are
                    tailored to provide hands-on experience and practical
                    knowledge, preparing students for the demands of the modern
                    tech industry and fostering innovation and technological
                    advancement in Nepal.
                  </div>
                </Collapse>
              </div>
              <div className="accordion-item">
                <h6 className="accordion-header" id="genques-headingFour">
                  <button
                    className={`accordion-button ${!col4 ? "collapsed" : ""}`}
                    type="button"
                    onClick={t_col4}
                    style={{ cursor: "pointer" }}
                  >
                    4. Where do I contact?
                  </button>
                </h6>
                <Collapse isOpen={col4} className="accordion-collapse">
                  <div className="accordion-body">
                    To contact Nepal Botworks for inquiries or more information,
                    you can reach out to them at their office in Liwali 8,
                    Bhaktapur. Typically, educational institutions provide
                    contact details such as phone numbers, email addresses, or
                    social media handles on their official website or
                    promotional materials. If you have specific questions or
                    need assistance regarding their courses, admissions, or any
                    other related matters, contacting them directly through
                    these channels would be the best approach.
                  </div>
                </Collapse>
              </div>
            </div>
          </div>
        </Col>
      </Container>
      <Footer />
    </div>
  );
}

export default FAQ;
