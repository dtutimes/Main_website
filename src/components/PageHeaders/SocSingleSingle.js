import React from "react";

// reactstrap components
import { Container, Row,Col, Button } from "reactstrap";

// core components
import {Animated} from 'react-animated-css';


function SocietySingleSingle(props) {
  return (
    <>
        <div className="header-1">
          <div
            className="page-header"
            style={{
              backgroundImage:
                "url(" + require("assets/img/bg_wall.jpg") + ")"
            }}
          >
            <div className="filter" />
            <div className="content-center">
              <Container>
                <Row>
                  <Col md="5">
                    <div className="iframe-container">
                      <img
                        allowFullScreen=""
                        frameBorder="0"
                        height="250"
                        src={props.img}
                      />
                      
                    </div>
                  </Col>
                  <Col className="ml-auto" md="6">
                    <h2 className="title">{props.name}</h2>
                    <h5 className="description">
                      {props.des}
                    </h5>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
    </>
  );
}

export default SocietySingleSingle;
