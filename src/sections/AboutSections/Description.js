import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Blob } from "react-blob";

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="70vh"
    style={{
      position: "absolute",
      top: "10%",
      left: "-5%",
      zIndex: 0,
      backgroundColor: "#21D4FD",
      color: "white",
      opacity: 0.95,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

const Description = () => {
  React.useEffect(() => {});
  return (
    <>
      <div
        className="section section-icons"
        style={{
          paddingBottom: 0,
          height: "90vh",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <BackgroundBlob />
        <Container fluid>
          <Row>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-left-icon nc-icon nc-planet add-animation" />
                <i className="second-left-icon nc-icon nc-touch-id add-animation" />
                <i className="third-left-icon nc-icon nc-lock-circle-open add-animation" />
                <i className="fourth-left-icon nc-icon nc-tap-01 add-animation" />
                <i className="fifth-left-icon nc-icon nc-zoom-split add-animation" />
                <i className="sixth-left-icon nc-icon nc-atom add-animation" />
                <i className="seventh-left-icon nc-icon nc-favourite-28 add-animation" />
                <i className="eighth-left-icon nc-icon nc-settings add-animation" />
                <i className="ninth-left-icon nc-icon nc-bulb-63 add-animation" />
                <i className="tenth-left-icon nc-icon nc-circle-10 add-animation" />
              </div>
            </Col>
            <Col className="text-center" md="6">
              <h2 className="title revealOnScroll">Who are we</h2>
              <h5 className="description">
                DTU Times is the Official Newsletter of Delhi Technological
                University,formerly known as Delhi College of Engineering.
              </h5>
              <hr />
              <h5 className="description">
                Founded as DCE Times in 2009 by Anand Meena and Abhishek Bindal,
                it was among the first college newspapers to be published across
                all engineering colleges in India. It has since transitioned
                into its current form as a Quarterly Newsletter, published with
                the aim of providing essential correspondence, news updates, and
                palatable articles to the students of the University. Our Online
                and Social Media presence includes a Facebook Page, an Instagram
                Handle, a Website, and a Blog on WordPress.
              </h5>
              <br />
            </Col>
            <Col md="3">
              <div className="icons-nucleo">
                <i className="first-right-icon nc-icon nc-bank add-animation" />
                <i className="second-right-icon nc-icon nc-tag-content add-animation" />
                <i className="third-right-icon nc-icon nc-bell-55 add-animation" />
                <i className="fourth-right-icon nc-icon nc-tv-2 add-animation" />
                <i className="fifth-right-icon nc-icon nc-map-big add-animation" />
                <i className="sixth-right-icon nc-icon nc-badge add-animation" />
                <i className="seventh-right-icon nc-icon nc-simple-add add-animation" />
                <i className="eighth-right-icon nc-icon nc-trophy add-animation" />
                <i className="ninth-right-icon nc-icon nc-hat-3 add-animation" />
                <i className="tenth-right-icon nc-icon nc-key-25 add-animation" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Description;
