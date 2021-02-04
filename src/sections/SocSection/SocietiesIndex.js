import React from "react";
import { useState } from "react";
import { Blob } from "react-blob";
import api from "api";
// reactstrap components
// core components
import Carousel from "nuka-carousel";
import { Link } from "react-router-dom";
import { Card, Container,Row,Col } from "reactstrap";
// sections for this page
import SectionComponents from "../../views/presentation-sections/SectionComponents.js";
import SocHeader from "components/PageHeaders/SocHeader.js";
// import Axios from "axios";
import { Loader } from "components/LoaderComponent.js";
import './SocietiesIndex.scss';

function Presentation() {
  const [mob, setMob] = useState(false);
  const [data,setData] = useState([]);
  const [loaded,setLoaded] = useState(false);
  document.documentElement.classList.remove("nav-open");
  const logodtu = require("assets/img/icons/W.png");
  const checkScroll = () => {

    
    const componentPosition = document.getElementsByClassName("add-animation");
    const scrollPosition = window.pageYOffset;
    for (var i = 0; i < componentPosition.length; i++) {
      var rec =
        componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
      if (scrollPosition + window.innerHeight >= rec) {
        componentPosition[i].classList.add("animated");

      } else if (scrollPosition + window.innerHeight * 0.8 < rec) {
        componentPosition[i].classList.remove("animated");
      }
    }
  };

  React.useEffect(() => {
    document.body.classList.add("presentation-page");
    window.addEventListener("scroll", checkScroll);
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    const a = window.innerWidth;
    // console.log(a);
    if (a <= 780) {
      setMob(true);
      // console.log(mob);
    } else {
      setMob(false);
      // console.log(mob);
    }
    window.addEventListener("resize", () => {
      const b = window.innerWidth;
      if (b <= 780) {
        setMob(true);
        // console.log(mob);
      } else {
        setMob(false);
        // console.log(mob);
      }
    });
    api.get(`/news`).then(res=>{
      if(res && res.data) {
        setData(res.data);
        setLoaded(true);
      }
    });
    return function cleanup() {
      document.body.classList.remove("presentation-page");
      window.removeEventListener("scroll", checkScroll);
    };
  },[]);
  if (mob === false && loaded===true){
    return (
      <>
      {console.log(data)}
        <SocHeader />
        <Container>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
                <h1 className="title mb-5">News</h1>
              </Col> 
          </Row>
          <Row>
              <Carousel
                slidesToShow={3}
                swiping={true}
                renderCenterLeftControls={({ previousSlide }) => (
                    <button
                    onClick={previousSlide}
                    className="btn-move-left btn-round btn btn-default"
                    >
                    <i className="nc-icon nc-minimal-left"></i>
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button
                    className="btn-move-right btn-round btn btn-default"
                    onClick={nextSlide}
                    >
                    <i className="nc-icon nc-minimal-right"></i>
                    </button>
                )}
                cellSpacing={1}
                renderBottomCenterControls={""}
            >
                {data.map(x=>{
                  return (
                <Card width="90%" className="news_soc_card">
                  <div className="info">
                    <div className="icon icon-neutral">
                      <img src={logodtu}></img>
                    </div>
                    <div className="description">
                      <h5 className="info-title">{x.title}</h5>
                      <p className="description">
                        {x.description.slice(0,100)}
                      </p>
                    </div>
                  </div>
                </Card>
                  )
                })}
                </Carousel>
            </Row>
            </Container>
        
          <SectionComponents />
        
      </>
    );
  }
  else if(mob===true && loaded===true) {
    return (
      <>
        <SocHeader />
          <SectionComponents/>
          <Container>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">News</h2>
              </Col> 
          </Row>
          <Row>
              <Carousel
                style={{marginBottom:'50px'}}
                slidesToShow={1}
                swiping={true}
                renderCenterLeftControls={({ previousSlide }) => (
                    <button
                    onClick={previousSlide}
                    className="btn-move-left btn-round btn btn-default"
                    >
                    <i className="nc-icon nc-minimal-left"></i>
                    </button>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                    <button
                    className="btn-move-right btn-round btn btn-default"
                    onClick={nextSlide}
                    >
                    <i className="nc-icon nc-minimal-right"></i>
                    </button>
                )}
                cellSpacing={1}
                renderBottomCenterControls={""}
            >
                {data.map(x=>{
                  return (
                    <Card  className="news_soc_card" >
                  <div className="info">
                    <div className="icon icon-neutral" >
                      <img src={logodtu}></img>
                    </div>
                    <div className="description">
                      <h5 className="info-title">{x.title}</h5>
                      <p className="description">
                        {x.description.slice(0,100)}
                      </p>
                    </div>
                  </div>
                </Card>
                  )
                })}
                </Carousel>
            </Row>
            </Container>
      </>
    );
  }
  else {
    return <Loader/>
  }
}
const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="185vh"
    style={{
      position: "absolute",
      bottom: "-10%",
      right: "35%",
      zIndex: 5,
      backgroundColor: "#8FA998",
      color: "white",
      opacity: 0.45,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

export default Presentation;
