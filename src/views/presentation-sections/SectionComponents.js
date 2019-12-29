import React from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

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
      <div className="section section-components section-light">
        <Row>
          <Col lg="6" md="12">
            <div className="image-container">
              <img
                alt="..."
                className="components-macbook"
                src={require("assets/img/presentation-page/laptop-basic.png")}
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
                  src="https://raw.githubusercontent.com/mrFahrenhiet/Main-Web/master/src/assets/img/socity/tech-team.jpg"
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
  );}
}

export default SectionComponents;
