import React from "react";
import './Soc.css'
import {
  Card, CardBody, CardTitle, CardFooter, Row, Col
} from "reactstrap";

const SocietiesCard = props => {
  return (
  <ul className="soc_sectioncard">
    <li className="booking-card" style={{backgroundImage: `url(${props.img})`}}>
    <div className="book-container">
      <div className="content">
        <button className="btn">{props.name}</button>
      </div>
    </div>
    <div className="informations-container">
      <h2 className="soc_sectioncard_title">{props.name}</h2>
      <p className="sub-title">{props.category}</p>
      
      <div className="more-information">
        <div className="info-and-date-container">
          <div className="box info">
            <svg className="icon" style={{width: 24, height: 24}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
            </svg>
            <p style={{fontWeight:"bold"}}> Head</p>
            <p>{props.head}</p>
          </div>
          <div className="box date">
            <svg className="icon" style={{width: 24, height: 24}} viewBox="0 0 24 24">
              <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
            </svg>
            <p style={{fontWeight:"bold"}}> PR Head</p>
            <p>{props.prHead}</p>
          </div>
        </div>
        <p className="disclaimer" style={{ textOverflow: "ellipsis" }}>{props.des.slice(0,100)}...</p>
      </div>
    </div>
  </li>
  </ul>

    
  // <ul className="soc_sectioncard">
  //   <li className="booking-card" style={{backgroundImage: `url(${props.img})`}}>
  //   <div className="book-container">
  //     <div className="content">
  //       <button className="btn">{props.name}</button>
  //     </div>
  //   </div>
  //   <div className="informations-container">
  //     <h2 className="soc_sectioncard_title">{props.name}</h2>
  //     <p className="sub-title">{props.category}</p>
      
  //     <div className="more-information">   
  //     <p class="disclaimer" style={{ textOverflow: "ellipsis" }}>{props.des.slice(0,400)}...</p>   
  //       <div className="info-and-date-container">
  //         <div className="box info">
  //           <svg className="icon" style={{width: 24, height: 24}} viewBox="0 0 24 24">
  //             <path fill="currentColor" d="M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11V17Z" />
  //           </svg>
  //           <p style={{fontWeight:"bold"}}> Head</p>
  //           <p>{props.head}</p>
  //         </div>
  //         <div className="box date">
  //           <svg className="icon" style={{width: 24, height: 24}} viewBox="0 0 24 24">
  //             <path fill="currentColor" d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
  //           </svg>
  //           <p style={{fontWeight:"bold"}}> PR Head</p>
  //           <p>{props.prHead}</p>
  //         </div>
          
  //       </div>
        
  //     </div>
  //   </div>
  
  // </li>
  // </ul>

    // <Card
    //   data-background="image"
    //   style={{
    //     backgroundImage: "url(" + props.img + ")",
    //     cursor: "pointer"
    //   }}
    //   className="take"
    //   onClick={() => {
    //     console.log("hello hello");
    //   }}
    // >
    //   <CardBody className="takeOnMe">
    //     <CardTitle>
    //       <h3>{props.name}</h3>
    //     </CardTitle>
    //     <p style={{ textOverflow: "ellipsis" }}>{props.des.slice(0,400)}...</p>
    //     {/* {console.log(props.des.slice(0,100))} */}
    //     <CardFooter>
          

    //       <div class="t-info">
    //       <Row>
    //         <Col md="6">
    //           <h4 class="t-name">{props.head}</h4>
    //           <span class="t-role">Head-Incharge</span>
    //         </Col>
    //         <Col md="6">
    //           <h4 class="t-name">{props.prHead}</h4>
    //           <span class="t-role">PR-Incharge</span>
    //         </Col>
    //       </Row>
    //       </div>
    //     </CardFooter>
        
    //   </CardBody>
    // </Card>


    // <div className="card transition">
    //   <h2 className="transition h2_soc">{props.name}<br /><small className="small_soc">{props.des} </small></h2>
    //   <div className="cta-container transition"></div>
    //   <div className="card_circle transition" style={{background: `url(${props.img})`, backgroundSize:"cover"}}></div>
    // </div>


  );
};
export default SocietiesCard;
