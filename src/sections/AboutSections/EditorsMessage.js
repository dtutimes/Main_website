import React from "react";
import { Blob } from 'react-blob';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  TabPane,
  Container,
  Row,
  Col
} from "reactstrap";

const BackgroundBlob = ({ style, props }) => (
  <Blob
    size="70vh"
    style={{
      position: "absolute",
      top: "10%",
      right: "-5%",
      zIndex: 1,
      backgroundColor: "#21D4FD",
      color: "white",
      opacity: 0.95,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

const EditorsMessage = () => {
  const [activePill, setActivePill] = React.useState("1");

  return (
    <>
      <div
        className="section section-project cd-section"
        id="projects"
        style={{
          paddingTop: 0,
          height: "90vh",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <BackgroundBlob />
        <div className="project-4 section">
          <Container>
            <Row>
              <Col className="ml-auto text-right" md="12">
                <h2 className="title">Editors' message</h2>
                <h5 className="description"></h5>
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col className="mr-auto" md="4">
                <img width="80%" src={require("assets/img/icons/idea.png")} />
              </Col>
              <Col className="ml-auto" md="7">
                <Card className="card-plain">
                  <CardBody>
                    <h6 className="card-category">Shivam Jha</h6>
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                      <CardTitle tag="h3">
                        The need of a great product
                      </CardTitle>
                    </a>
                    <p className="card-description">
                      Back in 2009, DTU Times was started as an endeavour to
                      bridge the gap between the administration and students of
                      DTU (then DCE). Today, the team marks its presence on a
                      multitude of portals, and apart from reporting news, is a
                      content producer in its own merit. In this journey
                      spanning nearly a decade, while DTU Times has evolved into
                      a reliable media house with thousands of readers from DTU
                      and beyond, the underlying philosophy of the team has
                      remained unwavered.
                    </p>
                    {/* <CardFooter>
                      <Button
                        className="btn-neutral mr-1"
                        color="dark"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-book mr-1" />
                        Read More
                      </Button>
                      <Button
                        className="btn-just-icon btn-neutral mr-1"
                        color="dark"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-apple" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-neutral mr-1"
                        color="dark"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-android" />
                      </Button>
                      <Button
                        className="btn-just-icon btn-neutral"
                        color="dark"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="fa fa-windows" />
                      </Button>
                    </CardFooter> */}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default EditorsMessage;
