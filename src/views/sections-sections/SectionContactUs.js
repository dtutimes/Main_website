import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
const MapWrapper = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={{ lat: 44.445248, lng: 26.099672 }}
      defaultOptions={{
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [
              {
                color: "#e9e9e9"
              },
              {
                lightness: 17
              }
            ]
          },
          {
            featureType: "landscape",
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 17
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 29
              },
              {
                weight: 0.2
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 18
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "geometry",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                lightness: 16
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f5f5"
              },
              {
                lightness: 21
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry",
            stylers: [
              {
                color: "#dedede"
              },
              {
                lightness: 21
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                visibility: "on"
              },
              {
                color: "#ffffff"
              },
              {
                lightness: 16
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                saturation: 36
              },
              {
                color: "#333333"
              },
              {
                lightness: 40
              }
            ]
          },
          {
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
              {
                color: "#f2f2f2"
              },
              {
                lightness: 19
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#fefefe"
              },
              {
                lightness: 20
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#fefefe"
              },
              {
                lightness: 17
              },
              {
                weight: 1.2
              }
            ]
          }
        ],
        scrollwheel: false //we disable de scroll over the map, it is a really annoing when you scroll through page
      }}
    >
      <Marker position={{ lat: 44.445248, lng: 26.099672 }} />
    </GoogleMap>
  ))
);

function SectionContactUs() {
  return (
    <>
      <div className="section section-contactus cd-section" id="contact-us">
        {/* ********* CONTACT US 1 ********* */}
        <div
          className="contactus-1 section-image"
          style={{
            backgroundImage:
              "url(" + require("assets/img/sections/soroush-karimi.jpg") + ")"
          }}
        >
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="10">
                <Card className="card-contact no-transition">
                  <CardTitle className="text-center" tag="h3">
                    Contact Us
                  </CardTitle>
                  <Row>
                    <Col className="ml-auto" md="5">
                      <CardBody>
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="nc-icon nc-pin-3" />
                          </div>
                          <div className="description">
                            <h4 className="info-title">
                              Find us at the office
                            </h4>
                            <p>
                              Bld Mihail Kogalniceanu, nr. 8, <br />
                              7652 Bucharest, <br />
                              Romania
                            </p>
                          </div>
                        </div>
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="nc-icon nc-badge" />
                          </div>
                          <div className="description">
                            <h4 className="info-title">Give us a ring</h4>
                            <p>
                              Michael Jordan <br />
                              +40 762 321 762 <br />
                              Mon - Fri, 8:00-22:00
                            </p>
                          </div>
                        </div>
                      </CardBody>
                    </Col>
                    <Col className="mr-auto" md="5">
                      <Form id="contact-form" method="post" role="form">
                        <CardBody>
                          <Row>
                            <Col md="6">
                              <FormGroup className="label-floating">
                                <label className="control-label">
                                  First name
                                </label>
                                <Input
                                  name="name"
                                  placeholder="First Name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <FormGroup className="label-floating">
                                <label className="control-label">
                                  Last name
                                </label>
                                <Input
                                  name="name"
                                  placeholder="Last Name"
                                  type="text"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <FormGroup className="label-floating">
                            <label className="control-label">
                              Email address
                            </label>
                            <Input
                              name="email"
                              placeholder="Email"
                              type="email"
                            />
                          </FormGroup>
                          <FormGroup className="label-floating">
                            <label className="control-label">
                              Your message
                            </label>
                            <Input
                              id="message"
                              name="message"
                              placeholder="Message"
                              type="textarea"
                              rows="6"
                            />
                          </FormGroup>
                          <Row>
                            <Col md="6">
                              <FormGroup check>
                                <Label check>
                                  <Input defaultValue="" type="checkbox" />
                                  I'm not a robot !{" "}
                                  <span className="form-check-sign" />
                                </Label>
                              </FormGroup>
                            </Col>
                            <Col md="6">
                              <Button
                                className="pull-right"
                                color="primary"
                                type="submit"
                              >
                                Send Message
                              </Button>
                            </Col>
                          </Row>
                        </CardBody>
                      </Form>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        {/* ********* END CONTACT US 1 ********* */}
        {/* ********* CONTACT US 2 ********* */}
        <div className="contactus-2">
          <div className="big-map" id="contactUsMap2">
            <MapWrapper
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `100%` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
          <Container>
            <Col md="6">
              <Card className="card-contact card-raised">
                <CardHeader className="header-raised header-primary text-center">
                  <CardTitle tag="h4">Contact Us</CardTitle>
                </CardHeader>
                <Form id="contact-form2" method="post" role="form">
                  <CardBody>
                    <Row>
                      <Col md="6">
                        <div className="info info-horizontal">
                          <div className="icon icon-info">
                            <i className="nc-icon nc-badge" />
                          </div>
                          <div className="description">
                            <h5 className="info-title">Give us a call</h5>
                            <p>
                              Michael Jordan <br />
                              +40 762 321 762 <br />
                              Mon - Fri, 8:00-22:00
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col md="6">
                        <div className="info info-horizontal">
                          <div className="icon icon-danger">
                            <i className="nc-icon nc-pin-3" />
                          </div>
                          <div className="description">
                            <h5 className="info-title">
                              Find us at the office
                            </h5>
                            <p>
                              Bld Mihail Kogalniceanu <br />
                              7652 Bucharest
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label className="control-label">Full Name</label>
                          <Input
                            name="name"
                            placeholder="Full name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label className="control-label">Email address</label>
                          <Input
                            name="email"
                            placeholder="Email"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <FormGroup>
                      <label className="control-label">Your message</label>
                      <Input
                        id="messages"
                        name="message"
                        placeholder="Message"
                        type="textarea"
                        rows="6"
                      />
                    </FormGroup>
                    <Row>
                      <Col md="6">
                        <FormGroup check>
                          <Label check>
                            <Input defaultValue="" type="checkbox" />
                            I'm not a robot !{" "}
                            <span className="form-check-sign" />
                          </Label>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <Button
                          className="btn-rose pull-right"
                          color="default"
                          type="submit"
                        >
                          Send Message
                        </Button>
                      </Col>
                    </Row>
                  </CardBody>
                </Form>
              </Card>
            </Col>
          </Container>
        </div>
        {/* ********* END CONTACT US 2 ********* */}
      </div>
    </>
  );
}

export default SectionContactUs;
