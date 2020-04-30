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


const imgurl= "https://images.unsplash.com/photo-1525543907410-b2562b6796d6?ixlib=rb-0.3.5&s=9ff8e5e718a6a40cbd0e1471235912f4&auto=format&fit=crop&w=3452&q=80",
imgurl2 = "https://images.unsplash.com/photo-1528785198459-ec50485704c7?ixlib=rb-0.3.5&s=3a2fc3039516555bbb2e9cd2967bd321&auto=format&fit=crop&w=1537&q=80",
imgurl3 = "https://images.unsplash.com/photo-1584593744985-ec3ff147b2a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80",
imgurl4 = "https://images.unsplash.com/photo-1488743196279-d2b91fd9e633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80";

function Presentation() {
  const [mob, setMob] = useState(false);
  const [data,setData] = useState([]);
  const [loaded,setLoaded] = useState(false);
  document.documentElement.classList.remove("nav-open");
  // function that is being called on scroll of the page
  const checkScroll = () => {
    // it takes all the elements that have the .add-animation class on them
    const componentPosition = document.getElementsByClassName("add-animation");
    const scrollPosition = window.pageYOffset;
    for (var i = 0; i < componentPosition.length; i++) {
      var rec =
        componentPosition[i].getBoundingClientRect().top + window.scrollY + 100;
      // when the element with the .add-animation is in the scroll view,
      // the .animated class gets added to it, so it creates a nice fade in animation
      if (scrollPosition + window.innerHeight >= rec) {
        componentPosition[i].classList.add("animated");
        // when the element with the .add-animation is not in the scroll view,
        // the .animated class gets removed from it, so it creates a nice fade out animation
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
  if (mob === false && loaded===true)
    return (
      <>
      {console.log(data)}
        <SocHeader />
        <Container>
        <BackgroundBlob/>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">News</h2>
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
                  <Card width="90%">
                  <div className="info">
                    <div className="icon icon-success">
                      <i className="nc-icon nc-palette" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">{x.title}</h4>
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
        <Row>
          <SectionComponents />
        </Row>
      </>
    );
  else if(mob===true && loaded===true) {
    return (
      <>
        <SocHeader />
        <Carousel
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
          renderBottomCenterControls={""}
          cellSpacing={20}

        >
            <Card>
              <Link to="/societies/cultural">
              <img
                alt="CULTURAL"
                className=""
                src={imgurl}
                style={{ height: "400px" }}
              />
              </Link>
            </Card>


            <Card>
              <Link to="/societies/tech_team">
                <img
                  alt="C"
                  className=""
                  src={imgurl2}
                  style={{ height: "400px" }}
                />
              </Link>
            </Card>



            <Card>
              <Link to="/societies/miscellaneous">
                <img
                  alt="..."
                  className=""
                  src={imgurl3}
                  style={{ height: "400px" }}
                />
              </Link>
            </Card>


            <Card>
              <Link to="/societies/technical">
                <img
                  alt="..."
                  className=""
                  src={imgurl4}
                  style={{ height: "400px" }}
                />
              </Link>
            </Card>
          
        </Carousel>
        <Container>
        <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">News</h2>
              </Col> 
          </Row>
          <Row>
              <Carousel
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
                  <Card>
                  <div className="info">
                    <div className="icon icon-danger">
                      <i className="nc-icon nc-palette" />
                    </div>
                    <div className="description">
                      <h4 className="info-title">{x.title}</h4>
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
