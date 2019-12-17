import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";
// core components

function SectionSummary() {
  return (
    <>
      <div className="section section-dark section-summary">
        <Container>
          <Row>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-layout-11" />
                </div>
                <div className="description">
                  <h4 className="info-title">Huge Number of Components</h4>
                  <p>
                    The kit comes with components designed to look perfect
                    together. All components fit perfectly with each other.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-tile-56" />
                </div>
                <div className="description">
                  <h4 className="info-title">Multi-Purpose Sections</h4>
                  <p>
                    The sections will help you generate pages in no time. From
                    team presentation to pricing options, you can easily
                    customise and built your examples.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="4">
              <div className="info">
                <div className="icon icon-danger">
                  <i className="nc-icon nc-paper" />
                </div>
                <div className="description">
                  <h4 className="info-title">Example Pages</h4>
                  <p>
                    Speed up your development time or get inspired with the
                    large number of example pages. You can jump start your
                    development with our pre-built example pages.
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

export default SectionSummary;
