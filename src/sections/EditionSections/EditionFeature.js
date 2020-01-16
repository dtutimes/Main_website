import React from "react";
import { Container, Row, Col } from "reactstrap";
import Carousel from "nuka-carousel";
import { Blob } from "react-blob";
import api from "api";

import EditionCard from "views/edition_section/editionCards";
class SectionHeader extends React.Component {
  state = {
    mob: false,
    editions: []
  };
  componentDidMount() {
    api.get("/edition").then(res => this.setState({ editions: res.data }));

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
  }
  render() {
    const { editions } = this.state;

    let columns = [];
    let carousels = [];

    for (let index = 0; index < editions.length; index++) {
      if (index < 9)
        columns.push(
          <Col md="4" className="mb-5" key={index}>
            <EditionCard
              title={editions[index].name}
              des="Aug-19-Oct-19"
              img={editions[index].imgUrl}
              ajax = {editions[index].ajax}
            />
          </Col>
        );
      else
        carousels.push(
          <EditionCard
            title={editions[index].name}
            img={editions[index].imgUrl}
            ajax = {editions[index].ajax}
            style={{ height: "400px" }}
          />
        );
    }

    return (
      <>
        <div className="wrapper">
          <div
            className="section-image text-center section"
            style={{
              backgroundImage:
                "url(" + require("assets/img/campus/10.jpeg") + ")",
                backgroundSize:"cover"
            }}
            
          >
            {/* Main_website/src/assets/img/campus/2019-08-09 05.08.52 4__01.jpg */}
            <div className="" style={{paddingBottom:"3rem"}}>
              <Container>
                <h2 style={{color:"white"}}>Whatever happens in DTU, stays in DTU Times.</h2>
                <h5 style={{ marginTop: "1rem", color:"white" }}>
                  Visit the stories of yore preserved by us with an integration
                  of art, fiction, imagination and satire as we rewind the clock
                  of DTU to whichever era you wish to witness today.
                </h5>
              </Container>
            </div>
            <div className="">
              <Container>
                {/* <div style={{position:"relative", }} media='screen and (max-width: 700px)'>
            <BackgroundBlob />
            <BackgroundBlob2 />
            </div> */}
                <Row>{columns}</Row>
                <div className="text-left" style={{ padding: "5rem 0" }}>
                  <h1>Archived</h1>
                </div>
                <Row>
                  <Carousel
                    slidesToShow={this.state.mob ? 1 : 3}
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
                    {carousels}
                  </Carousel>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </>
    );
  }
}
const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="70vh"
    style={{
      position: "absolute",
      top: "10%",
      right: "-5%",
      zIndex: 0,
      backgroundColor: "#DB7F8E",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);
const BackgroundBlob2 = ({ style, props }) => (
  <Blob
    size="70vh"
    style={{
      position: "absolute",
      bottom: "-60%",
      right: "-5%",
      zIndex: 0,
      backgroundColor: "#D4B2D8",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);
export default SectionHeader;
