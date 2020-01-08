import React from "react";

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

const TeamCard = props => {
  const { name, img, post, bio } = props;
  return (
    <>
      <Card className="card-profile card-plain">
        <CardImg top tag="div">
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img alt="..." className="img" src={img} />
          </a>
        </CardImg>
        <CardBody>
          <CardTitle tag="h4">{name}</CardTitle>
          <h6 className="card-category">{post}</h6>
          <p className="card-description">{bio}</p>
          <CardFooter>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fa fa-linkedin" />
            </Button>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="neutral"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fa fa-facebook" />
            </Button>
            <Button
              className="btn-link btn-just-icon"
              color="neutral"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              <i className="fa fa-instagram" />
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    </>
  );
};

export default TeamCard;
