import React from 'react';
import {Card,CardBody,CardFooter,Button} from 'reactstrap';

const SocietiesCard = (props) => {
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
      >
      </Card>
    )
}
export default SocietiesCard