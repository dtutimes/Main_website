import React from "react";
import './Soc.css'
import {
  Card, CardBody, CardTitle, CardFooter, Row, Col
} from "reactstrap";

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
        <p style={{ textOverflow: "ellipsis" }}>{props.des.slice(0,400)}...</p>
        {/* {console.log(props.des.slice(0,100))} */}
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
    // <div className="card transition">
    //   <h2 className="transition h2_soc">{props.name}<br /><small className="small_soc">{props.des} </small></h2>
    //   <div className="cta-container transition"></div>
    //   <div className="card_circle transition" style={{background: `url(${props.img})`, backgroundSize:"cover"}}></div>
    // </div>


  );
};
export default SocietiesCard;
