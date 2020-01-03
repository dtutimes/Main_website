import React from "react";
import { Container } from "reactstrap";
import { Animated } from "react-animated-css";
import { Blob } from 'react-blob'

const LandingHeader = () => {
  let pageHeader = React.createRef();
  return (
    <>
      <div
        className="page-header page-header-large"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/campus/image-1.jpg") + ")"
        }}
      >
        <div className="filter " />
        <div className="content-center">
          <Container className="text-left">
            <Animated
              animationIn="fadeIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1>
                Hello, <br />
                We are DTU Times
              </h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h3>Let us tell you more about what we do.</h3>
            </Animated>
          </Container>
        </div>
      </div>
    </>
  );
};

export default LandingHeader;
