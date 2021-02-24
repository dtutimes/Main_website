import React from "react";
// reactstrap components
import {
  Card, CardBody, CardTitle
} from "reactstrap";
import { Animated } from "react-animated-css";
import { Link } from "react-router-dom";

const SingleSocCard = ({ des, img }) => {
    return (
      <>
        <div>
        <Card className="card-plain card-blog text-left">
              <CardBody>
                <CardTitle tag="h3">
                    <Link to={'#'} style={{pointerEvents:"none"}}>Description</Link>
                </CardTitle>
                <br />
              </CardBody>
              <Animated
                    animationIn="fadeInDown"
                    animationInDelay={500}
                    isVisible={true}
                > 
                    <div className="card-image">
                        
                        <img alt="..." className="img img-raised" src={img} style={{width:"100%"}} />
                    </div>
                </Animated>
                <Animated
                animationIn="fadeInDown"
                animationInDelay={500}
                isVisible={true}
                >
                    <CardBody>
                        <p className="card-description" style={{ marginBottom: "1rem",color:"#494850",lineHeight:"2rem !important" }}>
                        <strong>{des}</strong>
                        </p>
                    </CardBody>
                </Animated>
              
            </Card>
    
        </div>
        </>
    );
  };
  
  export default SingleSocCard;