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
          <img alt={name} className="img" src={img} />
        </CardImg>
        <CardBody>
          <CardTitle tag="h4">{name}</CardTitle>
          <h6 className="card-category">{post}</h6>
          <p className="card-description">
            <strong>{bio}</strong>
          </p>
          <CardFooter>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="linkedin"
              href={linkedin}
            >
              <i className="fa fa-linkedin" />
            </Button>
            <Button
              className="btn-link btn-just-icon mr-1"
              color="facebook"
              href={facebook}
            >
              <i className="fa fa-facebook" />
            </Button>
            <Button
              className="btn-link btn-just-icon"
              color="instagram"
              href={instagram}
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
