import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import {Blob} from 'react-blob';
import {Animated} from 'react-animated-css';

class SectionComponents extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    axios.get("https://api.dtutimes.live/v1/society").then((res)=>{
      if(res && res.data) {
        this.setState({
          data : res.data 
        });
    }
    })
  }
  
  render(){
  return (
    <>
    <Animated
    animationIn="fadeIn"
    animationInDelay={1500}
    isVisible={true}
    >
    <div className="section section-components section-light">
      <BackgroundBlob />
      <BackgroundBlobDark/>
      <Row>
        <Col md='3'></Col>
        <Col lg="6" md="6">
          <div className="image-container">
            <img
              alt="..."
              className="components-macbook"
              src={require("assets/img/presentation-page/laptop-components.png")}
            />
            <Link to='/societies/cultural'>
              <img
                alt="CULTURAL"
                className="table-img"
                src={require("assets/img/societies/cultural.jpg")}
              />
            </Link>

            <Link to= '/societies/tech_team'>
              <img
                alt="C"
                className="coloured-card-btn-img"
                src={require("assets/img/societies/tech-team.jpg")}
              />
            </Link>

            <Link to='/societies/miscellaneous'>
              <img
                alt="..."
                className="coloured-card-img"
                src={'https://cdn.shopify.com/s/files/1/0969/6554/products/Class_9_grande.jpg?v=1456113288'}
              />
            </Link>

            <Link to='/societies/technical'>
              <img
                alt="..."
                className="social-img"
                src={require("assets/img/societies/tech.jpg")}
              />
            </Link>
          </div>
        </Col>
      </Row>
    </div>
    </Animated>
  </>
  );}
}

export default SectionComponents;
const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="120vh"
    style={{
      position: "absolute",
      top: "-30%",
      left: "0%",
      zIndex: 0,
      backgroundColor: "#f993ff",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);
const BackgroundBlobDark = ({ style, props }) => (
  <Blob
    size="90vh"
    style={{
      position: "absolute",
      top: "-10%",
      left: "60%",
      zIndex: 0,
      backgroundColor: "#110010",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);