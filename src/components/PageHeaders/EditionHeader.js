import React from "react";
import { Container, Row, Col, Button,Modal } from "reactstrap";
import { Animated } from "react-animated-css";
import api from 'api';
var https = require('https');
const agent = new https.Agent({  
  rejectUnauthorized: false
});
class EditionHeader extends React.Component {
  state ={
    data: [],
    viewerIsOpen: false,
    viewerIsOpen2: false,
    loaded: false,
    mob: false
  }
  constructor(props) {
    super(props)
    this.pageHeader = React.createRef();
  }
  componentDidMount() {
    const a = window.innerWidth;
  if (a <= 800) {
    this.setState({
      mob: true
    });
  } else {
    this.setState({
      mob: false
    });
  }
  window.addEventListener("resize", () => {
    const b = window.innerWidth;
    if (b <= 600) {
      this.setState({
        mob: true
      });
    } else {
      this.setState({
        mob: false
      });
    }
  });
    api.get('/edition', {httpsAgent: agent}).then(res => {
     this.setState({ data: res.data, loaded: true });
    })
    // console.log(this.state.loaded)
  }
  openLightbox = ()=> {
    this.setState({
      viewerIsOpen: true
    });
    // console.log(this.state.viewerIsOpen)
  };
  openLightbox2 = ()=> {
    this.setState({
      viewerIsOpen2: true
    });
    // console.log(this.state.viewerIsOpen)
  };

closeLightbox = () => {
    this.setState({
      viewerIsOpen: false,
      viewerIsOpen2: false
    })
  };

  render() {
  if(this.state.loaded) {
  return (
    <>
      <div
        className="page-header"
        ref={this.pageHeader}
        style={{
          backgroundImage:
            "url(" + require("assets/img/header/image-3.jpg") + ")",
          backgroundSize: "cover",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <Container>
            <Row>
              <Col>
                <Animated
                  animationIn="fadeIn"
                  animationInDelay={500}
                  isVisible={true}
                > <a
                  href={this.state.mob?this.state.data[0].link:null}>
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={this.state.data[0].imgUrl}
                    style={{ height: "128px", width: "100px",cursor:'pointer' }}
                    onClick={this.state.mob?null:this.openLightbox}
                  /></a>
                </Animated>
                
              </Col>
              {/* <Col>
                <Animated
                  animationIn="fadeIn"
                  animationInDelay={500}
                  isVisible={true}
                > 
                  <a
                  href={this.state.mob?this.state.data[1].link:null}>
                  <img
                    alt="..."
                    className="grid__img layer"
                    src={this.state.data[1].imgUrl}
                    style={{ height: "128px", width: "100px",cursor:'pointer' }}
                    className="imgRes"
                    onClick={this.state.mob?null:this.openLightbox2}
                  /></a>
                </Animated>
              </Col> */}
            </Row>
            {this.state.viewerIsOpen?(
            <Modal
            isOpen={this.state.viewerIsOpen}
            toggle={this.closeLightbox}
            className="yumpu_ed"
            style={{width:'820px',height:'566px'}}
            >
              <iframe height="566px" width="700px" src={this.state.data[0].ajax} frameBorder={0} allowFullScreen="true" allowTransparency="true" />
            </Modal>):null}
            {/* {this.state.viewerIsOpen2?(
            <Modal
            isOpen={this.state.viewerIsOpen2}
            toggle={this.closeLightbox}
            className="yumpu_ed"
            style={{width:'820px',height:'566px'}}
            >
              <iframe height="566px" width="700px" src={this.state.data[1].ajax} frameBorder={0} allowFullScreen="true" allowTransparency="true" />
            </Modal>):null} */}
            <Animated
              animationIn="fadeInUp"
              animationInDelay={1000}
              isVisible={true}
            >
              <h1 className="text-left"><strong>Editions</strong></h1>
            </Animated>
            <Animated
              animationIn="fadeInUp"
              animationInDelay={1500}
              isVisible={true}
            >
              <h3 className="text-left" style={{ marginTop: 0 }}>
                <strong>Come, take a trip down the memory lane of DTU.</strong>
              </h3>
            </Animated>
            <div style={{ position: "relative" }}>
              <Animated
                animationIn="fadeInUp"
                animationInDelay={1200}
                animationInDuration={1200}
                isVisible={true}
              >
                {/* <Button
                  className="btn-round mr-1 content-left"
                  color="info"
                  type="button"
                  style={{
                    position: "absolute",
                    left: 0,
                    top: "1rem"
                  }}
                >
                  <i className="fa fa-heart mr-1" />
                  View
                </Button> */}
              </Animated>
            </div>
            <br />
          </Container>
        </div>
      </div>
    </>
  );} else {
    return (
      <>
      </>
    )
  }
};
}
export default EditionHeader;
