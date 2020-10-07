import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Blob } from "react-blob";

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="60vh"
    style={{
      position: "absolute",
      top: "10%",
      left: "-5%",
      zIndex: 0,
      backgroundColor: "#84DCC6",
      color: "white",
      opacity: 0.45,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

const Description = () => {
  const [mob, setMob] = React.useState(false);
  React.useEffect(() => {
    const a = window.innerWidth;
    if (a <= 900) {
      setMob(true);
    } else {
      setMob(false);
    }
    window.addEventListener("resize", () => {
      const b = window.innerWidth;
      if (b <= 900) {
        setMob(true);
      } else {
        setMob(false);
      }
    });
  }, []);
  if (mob === false) {
    return (
      <>
        <div
          className="section section-icons"
          style={{
            paddingBottom: 0,
            height: "100%",
            position: "relative",
            overflow: "hidden"
          }}
        >
          <BackgroundBlob />
          <Container fluid>
            <Row>
              <Col md="3">
                <div className="icons-nucleo">
                  <i className="first-left-icon nc-icon nc-bulb-63 add-animation" />
                  <i className="second-left-icon nc-icon nc-circle-10 add-animation" />
                  <i className="third-left-icon nc-icon nc-tap-01 add-animation" />
                  <i className="fourth-left-icon nc-icon nc-paper add-animation" />
                  <i className="fifth-left-icon nc-icon nc-zoom-split add-animation" />
                  <i className="sixth-left-icon nc-icon nc-atom add-animation" />
                  <i className="seventh-left-icon nc-icon nc-align-left-2 add-animation" />
                  <i className="eighth-left-icon nc-icon nc-camera-compact add-animation" />
                  <i className="ninth-left-icon nc-icon nc-caps-small add-animation" />
                  <i className="tenth-left-icon nc-icon nc-html5 add-animation" />
                </div>
              </Col>
              <Col className="text-center" md="6">
                <h2 className="title revealOnScroll">
                  <span style={{ color: "#040403" }}>
                    <strong>
                      Who <span style={{ color: "#6bd098" }}>we</span> are
                    </strong>
                  </span>{" "}
                </h2>
                <h5 className="description" style={{ color: "#494850" }}>
                  DTU Times is the Official Newsletter and Media Platform of
                  Delhi Technological University, formerly known as Delhi
                  College of Engineering.
                </h5>
                <hr />
                <h5 className="description" style={{ color: "#494850" }}>
                  Founded as DCE Times in 2009 by Abhishek Bindal and Anand
                  Meena, DTU Times was among the first college newspapers to be
                  published across all engineering colleges in India. We have
                  since transitioned into its current form as a quarterly
                  newsletter, published with the aim of providing essential
                  correspondence, news updates and palatable articles to the
                  students of the University. DTU Times is also chartered to
                  chronicle the events and developments of DTU.
                </h5>
                <br />
              </Col>
              <Col md="3">
                <div className="icons-nucleo">
                  <i className="first-right-icon nc-icon nc-hat-3 add-animation" />
                  <i className="second-right-icon nc-icon nc-tag-content add-animation" />
                  <i className="third-right-icon nc-icon nc-bell-55 add-animation" />
                  <i className="fourth-right-icon nc-icon nc-bank add-animation" />
                  <i className="fifth-right-icon nc-icon nc-book-bookmark add-animation" />
                  <i className="sixth-right-icon nc-icon nc-laptop add-animation" />
                  <i className="seventh-right-icon nc-icon nc-bookmark-2 add-animation" />
                  <i className="eighth-right-icon nc-icon nc-trophy add-animation" />
                  <i className="ninth-right-icon nc-icon nc-mobile add-animation" />
                  <i className="tenth-right-icon nc-icon nc-email-85 add-animation" />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="section section-icons"
          style={{
            paddingBottom: 0,
            height: "100%",
            position: "relative",
            overflow: "hidden",
            paddingTop: "50px"
          }}
        >
          <Container fluid>
            <Row>
              {/* <Col md="3">
                <div className="icons-nucleo">
                  <i className="first-left-icon nc-icon nc-bulb-63 add-animation" />
                  <i className="second-left-icon nc-icon nc-circle-10 add-animation" />
                  <i className="third-left-icon nc-icon nc-tap-01 add-animation" />
                  <i className="fourth-left-icon nc-icon nc-paper add-animation" />
                  <i className="fifth-left-icon nc-icon nc-zoom-split add-animation" />
                  <i className="sixth-left-icon nc-icon nc-atom add-animation" />
                  <i className="seventh-left-icon nc-icon nc-align-left-2 add-animation" />
                  <i className="eighth-left-icon nc-icon nc-camera-compact add-animation" />
                  <i className="ninth-left-icon nc-icon nc-caps-small add-animation" />
                  <i className="tenth-left-icon nc-icon nc-html5 add-animation" />
                </div>
              </Col> */}
              <Col className="text-center" md="6">
                <h2 className="title revealOnScroll">
                  <span style={{ color: "#040403" }}>
                    <strong>
                      Who <span style={{ color: "#6bd098" }}>we</span> are
                    </strong>
                  </span>{" "}
                </h2>
                <h5 className="description" style={{ color: "#494850" }}>
                  DTU Times is the Official Newsletter and Media Platform of
                  Delhi Technological University, formerly known as Delhi
                  College of Engineering.
                </h5>
                <hr />
                <h5 className="description" style={{ color: "#494850" }}>
                  Founded as DCE Times in 2009 by Abhishek Bindal and Anand
                  Meena, DTU Times was among the first college newspapers to be
                  published across all engineering colleges in India. We have
                  since transitioned into its current form as a quarterly
                  newsletter, published with the aim of providing essential
                  correspondence, news updates and palatable articles to the
                  students of the University. DTU Times is also chartered to
                  chronicle the events and developments of DTU.
                </h5>
                <br />
              </Col>
              {/* <Col md="3">
                <div className="icons-nucleo">
                  <i className="first-right-icon nc-icon nc-hat-3 add-animation" />
                  <i className="second-right-icon nc-icon nc-tag-content add-animation" />
                  <i className="third-right-icon nc-icon nc-bell-55 add-animation" />
                  <i className="fourth-right-icon nc-icon nc-bank add-animation" />
                  <i className="fifth-right-icon nc-icon nc-book-bookmark add-animation" />
                  <i className="sixth-right-icon nc-icon nc-laptop add-animation" />
                  <i className="seventh-right-icon nc-icon nc-bookmark-2 add-animation" />
                  <i className="eighth-right-icon nc-icon nc-trophy add-animation" />
                  <i className="ninth-right-icon nc-icon nc-mobile add-animation" />
                  <i className="tenth-right-icon nc-icon nc-email-85 add-animation" />
                </div>
              </Col> */}
            </Row>
          </Container>
        </div>
      </>
    );
  }
};

export default Description;
