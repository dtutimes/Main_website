import React from "react";
// import axios from 'axios';
import api from "api";
import {Link} from 'react-router-dom';
import './scss/soc.scss';
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
// import {Blob} from 'react-blob';
import {Animated} from 'react-animated-css';

class SectionComponents extends React.Component {
  state = {
    data: []
  }
  componentDidMount() {
    api.get("/society").then((res)=>{
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
    
      <div className = "soccard__page-content" style={{marginTop:"50px"}}>
        <div className="soccard" style={{marginRight:"0"}}>
            <div className="soccard__content">
              <h2 className="soccard__title">Cultural</h2>
              <p className="soccard__copy">DUMMY TEXT</p>
              <Link to='/societies/cultural'>
                <button className="soccard__btn">Explore</button>
              </Link>
            </div>
        </div>
        <div className="soccard" style={{marginLeft:"0"}}>
          <div className="soccard__content">
            <h2 className="soccard__title">Technical</h2>
            <p className="soccard__copy">DUMMY TEXT</p>
            <Link to='/societies/technical'>
              <button className="soccard__btn">Explore</button>
            </Link>
          </div>
        </div>
        <div className="soccard" style={{marginRight:"0"}}>
          <div className="soccard__content">
            <h2 className="soccard__title">Tech-Teams</h2>
            <p className="soccard__copy">DUMMY TEXT</p>
            <Link to='/societies/tech_team'>
              <button className="soccard__btn">Explore</button>
            </Link>
          </div>
        </div>
        <div className="soccard" style={{marginLeft:"0"}}>
          <div className="soccard__content">
            <h2 className="soccard__title">Miscellaneous</h2>
            <p className="soccard__copy">DUMMY TEXT</p>
            <Link to='/societies/miscellaneous'>
              <button className="soccard__btn">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    
    
    {
    //   <div className="section section-components">
    //   <Row style={{margin:'auto 25%'}}>
    //   <div className="soc">
    //     <div className="container one">
    //       <div className="cardsoc">
    //         <h2>Cultural</h2>
    //         <Link to='/societies/cultural'>
    //           <i className=" nc-icon nc-minimal-right soc_i" />
            
    //         <div className="pic" />
    //         <button>
    //         </button>
    //         </Link>
    //       </div>
    //       <div className="cardsoc cardsoc2">
    //         <h2>Technical</h2>
    //         <Link to='/societies/technical'>
    //           <i className="nc-icon nc-minimal-right soc_i" />
            
    //         <div className="pic" />
    //         <button>
    //         </button>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className="container two">
    //       <div className="cardsoc cardsoc3">
    //         <h2>Miscellaneous</h2>
    //         <Link to='/societies/miscellaneous'>
    //           <i className="nc-icon nc-minimal-right soc_i" />
            
    //         <div className="pic" />
    //         <button>
    //         </button>
    //         </Link>
    //       </div>
    //       <div className="cardsoc cardsoc4">
    //         <h2>Tech-Team</h2>
    //         <Link to='/societies/tech_team'>
    //           <i className="nc-icon nc-minimal-right soc_i" />
            
    //         <div className="pic" />
    //         <button>
    //         </button>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>

    //   </Row>
    //   {/* <Row>
    //     <Col md='3'></Col>
    //     <Col lg="6" md="6">
    //       <div className="image-container">
    //         <img
    //           alt="..."
    //           className="components-macbook"
    //           src={require("assets/img/presentation-page/laptop-components.png")}
    //         />
    //         <Link to='/societies/cultural'>
    //           <img
    //             alt="CULTURAL"
    //             className="table-img"
    //             src={require("assets/img/societies/cultural.jpg")}
    //           />
    //         </Link>

    //         <Link to= '/societies/tech_team'>
    //           <img
    //             alt="C"
    //             className="coloured-card-btn-img"
    //             src={require("assets/img/societies/tech-team.jpg")}
    //           />
    //         </Link>

    //         <Link to='/societies/miscellaneous'>
    //           <img
    //             alt="..."
    //             className="coloured-card-img"
    //             src={'https://cdn.shopify.com/s/files/1/0969/6554/products/Class_9_grande.jpg?v=1456113288'}
    //           />
    //         </Link>

    //         <Link to='/societies/technical'>
    //           <img
    //             alt="..."
    //             className="social-img"
    //             src={require("assets/img/societies/tech.jpg")}
    //           />
    //         </Link>
    //       </div>
    //     </Col>
    //   </Row> */}
    // </div>
    
  }
    </Animated>
  </>
  );}
}

export default SectionComponents;