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

    </>
  );}
}

export default SectionComponents;
