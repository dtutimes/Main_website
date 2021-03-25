import React from "react";
import './Soc.css'
import {
  Card, CardBody, CardTitle, CardFooter, Row, Col
} from "reactstrap";

const SocietiesCard = props => {
  return (
    // <div>
    //   <div class="t-item">
    //     <div class="t-image">
    //       <img src="http://placehold.it/360x440" alt="Team Member" class="img-responsive"/>
    //       <div class="t-description">
    //         <div class="content-wrapper">
    //           <h4 class="h-alt">Hello!</h4>
    //           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div class="t-info">
    //       <h4 class="t-name">Philip Lee</h4>
    //       <span class="t-role">CEO &amp; Founder</span>
    //       <ul class="social-links">
    //         <li><a href="#"><i class="fa fa-facebook"></i></a></li>
    //         <li><a href="#"><i class="fa fa-twitter"></i></a></li>
    //         <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
    //         <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
    //       </ul>
    //     </div>  
    //   </div>
    // </div>


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
          

          <div class="t-info">
          <Row>
            <Col md="6">
              <h4 class="t-name">{props.head}</h4>
              <span class="t-role">Head-Incharge</span>
            </Col>
            <Col md="6">
              <h4 class="t-name">{props.prHead}</h4>
              <span class="t-role">PR-Incharge</span>
            </Col>
          </Row>
          </div>
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
