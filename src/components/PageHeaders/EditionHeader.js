import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Animated } from "react-animated-css";

const EditionHeader = () => {
  let pageHeader = React.createRef();

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/header/image-3.jpg") + ")",
          backgroundSize: "cover"
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <Row>
              <Col>
                <Animated
                  animationIn="fadeIn"
                  animationInDelay={500}
                  isVisible={true}
                > 
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/48.png"
                    style={{ height: "128px", width: "100px" }}
                    onClick={e => {
                      e.preventDefault();
                      
                    }}
                  />
                </Animated>
              </Col>
              <Col>
                <Animated
                  animationIn="fadeIn"
                  animationInDelay={500}
                  isVisible={true}
                >
                  <img
                    alt="..."
                    className="grid__img layer"
                    src="http://dtutimes.dtu.ac.in/img/47.png"
                    style={{ height: "128px", width: "100px" }}
                    className="imgRes"
                  />
                </Animated>
              </Col>
            </Row>
            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              isVisible={true}
            >
              <h1 className="text-left"><strong>Editions</strong></h1>
            </Animated>
            <Animated
              animationIn="fadeInUp"
              animationInDelay={1500}
              isVisible={true}
            >
              <h3 className="text-left" style={{ marginTop: 0 }}>
                <strong>Come, take a trip down the memory lane of DTU.</strong>
              </h3>
            </Animated>
            <div style={{ position: "relative" }}>
              <Animated
                animationIn="fadeInUp"
                animationInDelay={1200}
                animationInDuration={1200}
                isVisible={true}
              >
                {/* <Button
                  className="btn-round mr-1 content-left"
                  color="info"
                  type="button"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "1rem"
                  }}
                >
                  <i className="fa fa-heart mr-1" />
                  View
                </Button> */}
              </Animated>
            </div>
            <br />
          </Container>
        </div>
      </div>
    </>
  );
};

export default EditionHeader;
