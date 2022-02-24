import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle
} from "reactstrap";
const TeamCard = props => {
  const { name, img, post, bio, linkedin, facebook, instagram } = props;
  return (
    <>
      <Card className="card-profile card-plain">
        <CardImg top tag="div">
          <img alt="..." className="img" src={img} style={{ }}/>
        </CardImg>
        <CardBody>
          <CardTitle tag="h4">{name}</CardTitle>
          <h6 className="card-category">{post}</h6>
          <p className="card-description">
            <strong>{bio}</strong>
          </p>
        </CardBody>
      </Card>
    </>
  );
};
export default TeamCard;
