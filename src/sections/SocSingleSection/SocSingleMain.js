import React from "react";
import NewsTicker from "react-advanced-news-ticker";
// reactstrap components
import {
  Container,
  Row,
  Col,
  Button,
  Card
} from "reactstrap";
import Carousel from "nuka-carousel";
import { Animated } from "react-animated-css";
// core components
import { Blob } from "react-blob";
import { CardBody, CardTitle } from "reactstrap";
import ImageGallery from 'react-image-gallery';
import SingleSocCard from "./SingleSocCard";
import SingleSocGallery from "./SingleSocGallery";
import '../../assets/scss/_singlesinglesoc.scss';


class SocSingleMain extends React.Component {

  state = {
    mob: false
}
componentDidMount() {
const a =  window.innerWidth;

console.log(a);
if(a<=800) {
    this.setState({
        mob: true
    })
    console.log(this.state.mob);
}
else {
    this.setState({
        mob: false
    })
    console.log(this.state.mob);
}
window.addEventListener('resize',()=>{
    const b =  window.innerWidth;
    if(b<=600) {
        this.setState({
            mob: true
        })
        console.log(this.state.mob);
    }
    else {
        this.setState({
            mob: false
        })
        console.log(this.state.mob);
    }
})
} 
  render() {
  return (
    <>
      {/* <div className="section section-feature cd-section" id="features"> */}
        {/* ********* FEATURES 1 ********* */}
        <div className="features-1">
          <Container>
            <BigBackgroundBlob/>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8" sm="12">
                <SingleSocCard des={this.props.des} img={this.props.img}></SingleSocCard>
              </Col>
              <Col md="4" sm="12" className="news_container">
                  <h2 className="socsingle_news_title">News</h2>
                  
                  <NewsTicker
                      rowHeight = {100}
                      maxRows = {this.props.news.length<5?this.props.news.length:5}
                      speed = {600} 
                      duration = {4000}
                      autoStart = {true}
                      pauseOnHover = {false}
                      className = ""
                      >
                      {
                        this.props.news.map(x=>{
                          return (
                              <div className="description">
                                <h4 className="info-title">{x.title}</h4>
                                <p className="description">
                                  {x.description}
                                </p>
                              </div>
                          )
                        })
                      }
                  </NewsTicker>
                <hr
                  className="news_hr"
                />
              </Col>
            </Row>
            <Row>
                <Col className="ml-auto mr-auto text-center" md="8">
                  <Animated
                    animationIn="fadeInUp"
                    animationInDelay={1500}
                    isVisible={true}
                  >
                    <h2 className="title">
                      Contact
                    </h2>
                    <hr
                  style={{
                    borderTop: "1px solid black",
                    borderColor: "black",
                  }}
                />
                  </Animated>
                  {/* <p> */}
                  <Animated
                    animationIn="fadeInDown"
                    animationInDelay={2000}
                    isVisible={true}
                  >
                    <Row className="mb-5">
                      <Col className="news_box">
                        <div className="news_box_text">
                          <h3 className="title" style={{}}>
                            Head
                          </h3>
                          <p>{this.props.head}</p>
                          <br />
                          <p>{this.props.headC}</p>
                        </div>
                      </Col>
                      <Col className="news_box">
                        
                        <div className="news_box_text">
                          <h3 className="title">PR Head</h3>
                          <p>{this.props.pr}</p>
                          <br />
                          <p>{this.props.prC}</p>
                        </div>
                        
                      </Col>
                    </Row>
                  </Animated>
                  {/* </p> */}
                </Col>
              </Row>
          
            <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Gallery</h2>
                <hr
                  style={{
                    borderTop: "1px solid black",
                    borderColor: "black",
                  }}
                />
              </Col> 
            </Row>
            <Row>
              
              <SingleSocGallery items={this.props.src}/>
            </Row>
            
            <Row>
            </Row>
            </Container>
        </div>
    </>
  );}
}
const BigBackgroundBlob = ({ style, props }) => (
  <Blob
    size="165vh"
    style={{
      position: "absolute",
      bottom: "8%",
      right: "35%",
      zIndex: 0,
      backgroundColor: "rgb(139 235 240)",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style,
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
export default SocSingleMain;
