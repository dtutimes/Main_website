import React from 'react';
import {Card,CardBody,CardFooter,Button,Row,Col,CardTitle} from 'reactstrap';

const SocietiesCard = (props) => {
    return (
        <Card
        data-background="image"
        style={{
          backgroundImage:
            "url(" +
            props.img +
            ")",
        }}
        className="take"
      >
      <CardBody className="takeOnMe">
        <CardTitle><h3>{props.name}</h3></CardTitle>
        <p>{props.des}</p>
        <CardFooter>
        <Row>
          <Col md='4'>
            <p>Head-Incharge:{props.head}</p>
          </Col>
          <Col md='4'></Col>
          <Col md='4'>
            <p>Pr-Incharge:{props.prHead}</p>
          </Col>
        </Row>
      </CardFooter>
      </CardBody>
      </Card>
    )
}
export default SocietiesCard