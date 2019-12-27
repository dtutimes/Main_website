import React from 'react';
import {Card,CardBody,CardFooter,Button} from 'reactstrap';

const EditionCard = (props) => {
    return (
        <Card
        data-background="image"
        style={{
          backgroundImage:
            "url(" +
            props.img +
            ")",
            height:'420px'
        }}
        className="take"
      >
        <CardBody className="takeOnMe">
          <h6 className="card-category">{props.title}</h6>
          <div className="card-icon">
            <i className="fa fa-search" />
          </div>
          <p className="card-description">
            {props.des}
          </p>
          <CardFooter>
            <Button
              className="btn-neutral"
              color="link"
              
              onClick={() => {
                console.log('clicked')
                return (
                  <div>
                  <iframe width="620px" height="566px" src="https://www.yumpu.com/en/embed/view/agPX4GzeM19bVWIY" frameBorder={0} allowFullScreen="true" allowTransparency="true" />
                  </div>
                )
              }}
            >
              <i className="fa fa-book mr-1" />
              Show more
            </Button>
          </CardFooter>
        </CardBody>
      </Card>
    )
}
export default EditionCard