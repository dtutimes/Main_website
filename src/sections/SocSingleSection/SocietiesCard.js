import React from "react";
import { Card, CardBody, CardFooter, Row, Col, CardTitle } from "reactstrap";

const SocietiesCard = props => {
  return (
    <Card
      data-background="image"
      style={{
        backgroundImage: "url(" + props.img + ")",
        cursor: "pointer"
      }}
      className="take"
      onClick={() => {
        console.log("hello hello");
      }}
    >
      <CardBody className="takeOnMe">
        <CardTitle>
          <h3>{props.name}</h3>
        </CardTitle>
        <p style={{ textOverflow: "ellipsis;" }}>{props.des.slice(0,400)}...</p>
        {console.log(props.des.slice(0,100))}
        <CardFooter>
          <Row>
            <Col md="4">
              <p>Head-Incharge:{props.head}</p>
            </Col>
            <Col md="4"></Col>
            <Col md="4">
              <p>Pr-Incharge:{props.prHead}</p>
            </Col>
          </Row>
        </CardFooter>
      </CardBody>
    </Card>
  );
};
export default SocietiesCard;
