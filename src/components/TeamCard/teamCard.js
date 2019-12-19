import React from 'react'

import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardImg,
    CardTitle,
    Row,
    Col
  } from "reactstrap";

const TeamCard = (props) => {
    return (
        <>
            <Card className="card-profile card-plain">
                      <Row>
                        <Col md="5">
                          <CardImg top tag="div">
                            <a href="#pablo" onClick={e => e.preventDefault()}>
                              <img
                                alt={props.name}
                                className="img"
                                src={props.img}
                              />
                            </a>
                          </CardImg>
                        </Col>
                        <Col md="7">
                          <CardBody className="text-left">
                            <CardTitle tag="h4">{props.name}</CardTitle>
                            <h6 className="card-category">{props.post}</h6>
                            <p className="card-description">
                              {props.bio}
                            </p>
                            <CardFooter className="pull-left">
                              <Button
                                className="btn-just-icon btn-link mr-1"
                                color="twitter"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-twitter" />
                              </Button>
                              <Button
                                className="btn-just-icon btn-link mr-1"
                                color="facebook"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-facebook" />
                              </Button>
                              <Button
                                className="btn-just-icon btn-link"
                                color="linkedin"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                              >
                                <i className="fa fa-linkedin" />
                              </Button>
                            </CardFooter>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
        </>
    )
}
export default TeamCard