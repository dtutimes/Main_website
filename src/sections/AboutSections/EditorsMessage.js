import React from "react";
import { Blob } from "react-blob";
import {
  // Button,
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
      backgroundColor: "#BCF8EC",
      color: "white",
      opacity: 0.25,
      fontSize: "50vh",
      ...style
    }}
    {...props}
  />
);

const EditorsMessage = () => {
  const [mob, setMob] = React.useState(false);
  React.useEffect(() => {
    const a = window.innerWidth;
    if(a <= 900){
      setMob(true);
    }
    else{
      setMob(false);
    }
    window.addEventListener("resize", () => {
      const b = window.innerWidth;
      if(b <= 900){
        setMob(true);
      }
      else{
        setMob(false);
      }
    })
  });
  if(mob == false){
  return (
    <>
      <div
        className="section section-project cd-section"
        id="projects"
        // style={{
        //   paddingTop: 0,
        //   height: "100%",
        //   position: "relative",
        //   // overflow: "hidden"
        // }}
        style={{
          paddingBottom: 0,
          height: "100%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <BackgroundBlob />
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto text-right" md="12">
                <h2 className="title"><span style={{ color: "#040403" }}><strong>Editors'</strong></span>{" "}
                <span style={{ color: "#6bd098" }}><strong>Message</strong></span></h2>
                {/* <h5 className="description"></h5> */}
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col className="mr-auto mt-5" md="4">
                <Card>
                  <img  alt="..." src={require("assets/img/Editors/edit.jpg")}/>
                </Card>
                
              </Col>
              <Col className="ml-auto" md="7">
                <Card className="card-plain">
                  <CardBody>
                    <h6 className="card-category">Shivam Jha, Vishesh Kashyap</h6>
                    {/* <a href="#pablo" onClick={e => e.preventDefault()}></a> */}
                    <h5
                      className="description"
                      style={{ color: "#494850" }}
                    >
                      January 2009 saw the publication of the first edition of
                      DCE Times, a seven-page issue developed by a team of six.
                      Eleven years on, the fledgling newsletter has developed
                      into a DTU’s very own media body, with over seventy
                      members working year-round, not merely reporting the news,
                      but also developing content across print and social
                      avenues. Over the past decade, DTU Times has aimed to be
                      in the vanguard of university journalism through
                      experimentation, creativity and effectual implementation.
                      <br />
                      It is tempting to view the journey of DTU Times as
                      analogous to one’s life. In the years since its inception,
                      the team has grown in size, skill and scale, astute in the
                      knowledge that there remains a long way to go. Each year
                      brings opportunities to try something new, leading to an
                      increased maturity of beliefs and aims. Yet, the target of
                      being the one-stop destination for the administration,
                      faculty, staff and students of DTU (and beyond) for all
                      information regarding the university, remains firm as
                      ever.
                    </h5>
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
}
else{
  return(
    <>
      <div
        className="section section-project cd-section"
        id="projects"
        // style={{
        //   paddingTop: 0,
        //   height: "100%",
        //   position: "relative",
        //   // overflow: "hidden"
        // }}
        style={{
          paddingBottom: 0,
          height: "100%",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div className="section">
          <Container>
            <Row>
              <Col className="ml-auto text-right" md="12">
                <h2 className="title"><span style={{ color: "#040403" }}><strong>Editors'</strong></span>{" "}
                <span style={{ color: "#6bd098" }}><strong>Message</strong></span></h2>
                {/* <h5 className="description"></h5> */}
              </Col>
            </Row>
            <div className="space-top" />
            <Row>
              <Col className="mr-auto" md="4">
              <Card
               data-background="image"
               style={{
                 backgroundImage:
                   "url(" +
                    require("assets/img/Editors/edit.jpg") +
                   ")",
                   
              }}>
                <CardBody>
                  <div className="card-icon">
                    <i className="fa fa-search" onClick={this.openLightbox} style={{cursor:'pointer'}}/>
                  </div>
                </CardBody>  
              </Card>
              </Col>
              <Col className="ml-auto" md="7">
                <Card className="card-plain">
                  <CardBody>
                    <h6 className="card-category">Shivam Jha, Vishesh Kashyap</h6>
                    {/* <a href="#pablo" onClick={e => e.preventDefault()}></a> */}
                    <h5
                      className="description"
                      style={{ color: "#494850" }}
                    >
                      January 2009 saw the publication of the first edition of
                      DCE Times, a seven-page issue developed by a team of six.
                      Eleven years on, the fledgling newsletter has developed
                      into a DTU’s very own media body, with over seventy
                      members working year-round, not merely reporting the news,
                      but also developing content across print and social
                      avenues. Over the past decade, DTU Times has aimed to be
                      in the vanguard of university journalism through
                      experimentation, creativity and effectual implementation.
                      <br />
                      It is tempting to view the journey of DTU Times as
                      analogous to one’s life. In the years since its inception,
                      the team has grown in size, skill and scale, astute in the
                      knowledge that there remains a long way to go. Each year
                      brings opportunities to try something new, leading to an
                      increased maturity of beliefs and aims. Yet, the target of
                      being the one-stop destination for the administration,
                      faculty, staff and students of DTU (and beyond) for all
                      information regarding the university, remains firm as
                      ever.
                    </h5>
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
  )
}
};

export default EditorsMessage;
