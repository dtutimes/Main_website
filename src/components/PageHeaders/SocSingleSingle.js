import React from "react";

// reactstrap components
import { Container, Row,Col, Button } from "reactstrap";

// core components
import {Animated} from 'react-animated-css';
import { Blob } from "react-blob";

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="75vh"
    style={{
      position: "absolute",
      top: "-60%",
      left: "39%",
      zIndex: 0,
      backgroundColor: "#17a2b861",
      color: "white",
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

const BackgroundBlobSmallRight = ({ style, props }) => (
  <Blob
    size="59vh"
    style={{
      position: "absolute",
      top: "-15%",
      right: "0%",
      zIndex: 0,
      backgroundColor: "#51bcda",
      color: "white",
      opacity: 0.5,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

const BackgroundBlobSmall = ({ style, props }) => (
  <Blob
    size="45vh"
    style={{
      position: "absolute",
      top: "-15%",
      left: "5%",
      zIndex: 0,
      backgroundColor: "#3ecce3",
      color: "white",
      opacity: 0.9,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

function SocietySingleSingle(props) {
  return (
    <>
      <section
        className="section pb-0"
        style={{
          height: "55vh",
          paddingTop: "10rem",
          position: "relative",
          overflow: "hidden",
          paddingBottom: "0 !important"
        }}
      >
      
        <div className="header-1">
            <div className="filter" />
            
            <BackgroundBlob />
            <BackgroundBlobSmallRight />
            <BackgroundBlobSmall />
            <div className="content-center">
          <Container className="soc_text-left">
            <Animated
              animationIn="fadeIn"
              animationInDelay={500}
              isVisible={true}
            >
              <h1>
                <strong>{props.name}</strong>
              </h1>
            </Animated>

            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              animationInDuration={1000}
              isVisible={true}
            >
              <h5 className="soc_herosaver herosaver">
                <strong>
                  {props.des}
                </strong>
              </h5>
            </Animated>
          </Container>
        </div>
    
        </div>
      </section>
    </>
  );
}

export default SocietySingleSingle;
