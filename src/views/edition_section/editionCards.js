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
  mob: false
}
componentDidMount() {
  const a = window.innerWidth;
  if (a <= 800) {
    this.setState({
      mob: true
    });
  } else {
    this.setState({
      mob: false
    });
  }
  window.addEventListener("resize", () => {
    const b = window.innerWidth;
    if (b <= 600) {
      this.setState({
        mob: true
      });
    } else {
      this.setState({
        mob: false
      });
    }
  });
}

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
            height:this.props.height,
            width: this.props.width
            
        }}
        className="take"

      >
        <CardBody className="takeOnMe">
          <h6 className="card-category">{this.props.title}</h6>
          <div className="card-icon">
            <i className="fa fa-search" onClick={this.openLightbox} style={{cursor:'pointer'}}/>
          </div>
          <p className="card-description">
            {this.props.des}
          </p>
          <CardFooter>
            {this.state.mob||this.props.id>38?(<a href={this.props.link} >Show More</a>):(
            <Button
              className="btn-neutral"
              color="link"
              onClick={this.openLightbox}
            >
              <i className="fa fa-book mr-1" />
              Show more
            </Button>)}
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
              <iframe height="566px" width="700px" src={this.props.ajax} frameBorder={0} allowFullScreen="true" allowTransparency="true" />
            </Modal>):null}
    </>  
    )}
}
export default EditionCard