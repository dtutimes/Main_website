import React from 'react';
import {Card,CardBody,CardFooter,Button,Modal,ModalBody} from 'reactstrap';



const customStyles = {
  content : {


  },
  overlay: {
    background: 'rgba(21,21,21,0.9)',
  }
};


class EditionCard extends React.Component {
  // const [currentImage, setCurrentImage] = useState(0);
  // const [viewerIsOpen, setViewerIsOpen] = useState(false);



state = {
  viewerIsOpen: false
}
openLightbox = ()=> {
    this.setState({
      viewerIsOpen: true
    });
    console.log(this.state.viewerIsOpen)
  };

closeLightbox = () => {
    this.setState({
      viewerIsOpen: false
    })
  };
  render() {
    return (
      <>
        <Card
        data-background="image"
        style={{
          backgroundImage:
            "url(" +
            this.props.img +
            ")",
            height:'420px'
        }}
        className="take"
      >
        <CardBody className="takeOnMe">
          <h6 className="card-category">{this.props.title}</h6>
          <div className="card-icon">
            <i className="fa fa-search" />
          </div>
          <p className="card-description">
            {this.props.des}
          </p>
          <CardFooter>
            <Button
              className="btn-neutral"
              color="link"
              onClick={this.openLightbox}
            >
              <i className="fa fa-book mr-1" />
              Show more
            </Button>
          </CardFooter>
          
        </CardBody>
      </Card>
      {this.state.viewerIsOpen?(
            <Modal
            isOpen={this.state.viewerIsOpen}
            toggle={this.closeLightbox}
            className="yumpu_ed"
            style={{width:'820px',height:'566px'}}
            >
              <iframe height="566px" src="https://www.yumpu.com/en/embed/view/agPX4GzeM19bVWIY" frameBorder={0} allowFullScreen="true" allowTransparency="true" />
            </Modal>):null}
    </>  
    )}
}
export default EditionCard