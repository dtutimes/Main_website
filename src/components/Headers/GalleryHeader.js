import React from "react";

// reactstrap components
import { Container } from "reactstrap";

//Components
import {Animated} from 'react-animated-css'

// core components

function AboutUsHeader() {
  return (
    <>
      <div
        className="page-header page-header-small"
        style={{
          backgroundImage:
            "url(" + require("assets/img/campus/6.jpeg") + ")"
        }}
      >
        <div className="filter filter-primary" />
        <div className="content-center">
          <Container>
            <Animated
              animationIn="fadeIn"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h1>
                Gallery
              </h1>
            </Animated>
            <Animated
              animationIn="flipInX"
              animationInDelay={1400}
              animationInDuration={1000}
              isVisible={true}
            >
              <h3>When we’re not writing, we let our pictures do the talking. </h3>
            </Animated>
            
          </Container>
        </div>
      </div>
    </>
  );
}

export default AboutUsHeader;
