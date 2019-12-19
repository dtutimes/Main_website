import React from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

const PostCard = props => {
  var { title, biliner, slug, image, created_at } = props;
  return (
    <>
      <div className="article">
        <Row>
          <Col className="ml-auto mr-auto" md="8">
            <Card className="card-blog card-plain text-center">
              <div className="card-image">
                <a
                  href={"http://api.dtutimes.live/v1/" + slug}
                  onClick={e => {
                    e.preventDefault();
                    window.open("/story/" + slug);
                  }}
                >
                  <img alt="..." className="img img-raised" src={image} />
                </a>
              </div>
              <CardBody>
                <div className="card-category">
                  <Badge className="main-tag" color="primary">
                    Featured
                  </Badge>
                </div>
                <a href="javascrip: void(0);">
                  <CardTitle tag="h3">{title}</CardTitle>
                  <h6 className="title-uppercase">{created_at}</h6>
                </a>
                <div className="card-description">
                  <p>{biliner}</p>
                </div>
              </CardBody>
              <Link to="#">
                <Button
                  className="btn-round"
                  color="danger"
                  size="sm"
                  href={"http://api.dtutimes.live/v1/" + slug}
                  onClick={() => {
                    // localStorage.setItem("slug", slug);
                    window.open("/story/" + slug);
                  }}
                >
                  Read more
                </Button>
              </Link>
            </Card>
          </Col>
        </Row>
      </div>
      <hr />
      <br />
      <br />
    </>
  );
};

export default PostCard;
