import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function SectionComponents() {
  return (
    <>
      <div className="section section-components section-dark">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={require("assets/img/presentation-page/laptop-basic.png")}
              />
              <img
                alt="..."
                className="table-img"
                src={require("assets/img/presentation-page/table.jpg")}
              />
              <img
                alt="..."
                className="share-btn-img"
                src={require("assets/img/presentation-page/share-btn.png")}
              />
              <img
                alt="..."
                className="coloured-card-btn-img"
                src={require("assets/img/presentation-page/coloured-card-with-btn.png")}
              />
              <img
                alt="..."
                className="coloured-card-img"
                src={require("assets/img/presentation-page/coloured-card.png")}
              />
              <img
                alt="..."
                className="social-img"
                src={require("assets/img/presentation-page/social-row.png")}
              />
              <img
                alt="..."
                className="pin-btn-img"
                src={require("assets/img/presentation-page/pin-btn.png")}
              />
            </div>
          </Col>
          <Col className="ml-auto mr-auto" lg="4" md="10">
            <Container className="basic-container">
              <h3 className="title">Basic Components</h3>
              <h6 className="category">The core elements of your website</h6>
              <h5 className="description">
                We re-styled every Bootstrap 4 element to match the Paper Kit
                style. All the Bootstrap 4 components that you need in a
                development have been re-design with the new look. Besides the
                numerous basic elements, we have also created additional
                classes. All these items will help you take your project to the
                next level.
              </h5>
            </Container>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default SectionComponents;
