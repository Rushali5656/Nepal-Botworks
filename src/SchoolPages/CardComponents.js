import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import CountUp from "react-countup";

function CardComponents() {
  const buysellWidgets = [
    {
      id: 1,
      title: "Total Student",
      counter: "243",
      icon: "ri-shopping-bag-line",
      iconClass: "danger",
    },
    {
      id: 2,
      title: "Total Teachers",
      counter: "658",
      icon: "ri-funds-line",
      iconClass: "info",
    },
    {
      id: 3,
      title: "Total Children",
      counter: "104",
      icon: "ri-arrow-left-down-fill",
      iconClass: "warning",
    },
    {
      id: 4,
      title: "Total Staff's",
      counter: "87",
      icon: "ri-arrow-right-up-fill",
      iconClass: "success",
    },
  ];

  const cardStyle = {
    transition: "box-shadow 0.3s ease",
    backgroundColor: "rgb(134,53,3)",
    border: "1px solid #ccc",
    borderRadius: "5px",
  };

  const hoverShadowStyle = {
    boxShadow: "0 0 15px rgb(134,53,3)",
  };

  return (
    <div className="px-3">
      <Row className="p-5 px-5">
        {buysellWidgets.map((item, key) => (
          <Col xl={3} sm={6} key={key}>
            <Card
              className="card-animate"
              style={cardStyle}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = hoverShadowStyle.boxShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "";
              }}
            >
              <CardBody>
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <h6 className="text-white mb-3">{item.title}</h6>
                    <h2 className="mb-0">
                      <span className="counter-value text-white">
                        <CountUp start={0} end={item.counter} duration={3} /> +
                      </span>
                    </h2>
                  </div>
                  <div className="flex-shrink-0 avatar-sm">
                    <div
                      className={`avatar-title fs-22 rounded bg-${item.iconClass}-subtle text-${item.iconClass}`}
                    >
                      <i className={item.icon}></i>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CardComponents;
