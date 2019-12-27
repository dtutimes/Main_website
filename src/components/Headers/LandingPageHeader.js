import React from "react";

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

// core components

function LandingPageHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth > 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        className="page-header"
        ref={pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/campus/3.jpg") + ")"
          ,
          backgroundSize:'cover',
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <div className="motto">
            <Row>
              <Col>
                <img
                        alt="..."
                        className="grid__img layer"
                        src="http://dtutimes.dtu.ac.in/img/48.png"
                        style={{height:'128px',width:'100px'}}
                />
              </Col>
              <Col>
                <img
                  alt="..."
                  className="grid__img layer"
                  src="http://dtutimes.dtu.ac.in/img/47.png"
                  style={{height:'128px',width:'100px'}}
                  className="imgRes"
                />
              </Col>
              
            </Row>
              <h1 className="text-left"><p><h1 className="title">Read the Latest Print</h1></p><p><h1 className="title">Editions by DTU Times.</h1></p></h1>
              <br />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default LandingPageHeader;
