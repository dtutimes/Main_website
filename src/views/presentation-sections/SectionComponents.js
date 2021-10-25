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
    
      <div className = "soccard__page-content" style={{marginTop:"4rem", marginBottom: "100px"}}>
        <div className="soccard" >
            <div className="soccard__content">
              <h2 className="soccard__title">Cultural</h2>
              <p className="soccard__copy">DUMMY TEXT</p>
              <Link to='/societies/cultural' onClick={()=> {
                window.scrollTo(0,0);
              }}>
                <button className="soccard__btn">Explore</button>
              </Link>
            </div>
        </div>
        <div className="soccard" >
          <div className="soccard__content">
            <h2 className="soccard__title">Technical</h2>
            <p className="soccard__copy">DUMMY TEXT</p>
            <Link to='/societies/technical' onClick={()=> {
              window.scrollTo(0,0);
            }}>
              <button className="soccard__btn">Explore</button>
            </Link>
          </div>
        </div>
        <div className="soccard" >
          <div className="soccard__content">
            <h2 className="soccard__title">Tech-Teams</h2>
            <p className="soccard__copy">DUMMY TEXT</p>
            <Link to='/societies/tech_team' onClick={()=> {
              window.scrollTo(0,0);
            }}>
              <button className="soccard__btn">Explore</button>
            </Link>
          </div>
        </div>
        <div className="soccard" >
          <div className="soccard__content">
            <h2 className="soccard__title">Miscellaneous</h2>
            <p className="soccard__copy">DUMMY TEXT</p>
            <Link to='/societies/miscellaneous' onClick={()=> {
                  window.scrollTo(0,0);
                }}>
              <button className="soccard__btn">Explore</button>
            </Link>
          </div>
        </div>
      </div>
    </Animated>
  </>
  );}
}

export default SectionComponents;