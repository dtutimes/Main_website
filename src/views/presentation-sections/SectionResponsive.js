import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionResponsive() {
  return (
    <>
      <div className="section section-responsive section-gold">
        <Container fluid>
          <Row>
            <Col md="6">
              <div className="phone-container">
                <img
                  alt="..."
                  src={require("assets/img/presentation-page/responsive.png")}
                />
              </div>
            </Col>
            <Col lg="4">
              <div className="info info-horizontal">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-tablet-2" />
                </div>
                <div className="description">
                  <h4 className="info-title">Fully Responsive Layout</h4>
                  <p>
                    The kit is designed to be mobile first. Every components
                    looks great on any screen size.
                  </p>
                </div>
              </div>
              <div className="info info-horizontal">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-atom" />
                </div>
                <div className="description">
                  <h4 className="info-title">React Powered by Reactstrap</h4>
                  <p>
                    Paper Kit Pro React is built on top of Reactstrap. Get the
                    benefits of the most powerful framework and the perks of
                    amazing design.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SectionResponsive;
