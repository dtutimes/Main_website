import React, { useState, useCallback, useEffect } from "react";
import {Animated} from 'react-animated-css';

import { Container, Row, Col } from "reactstrap";

//
import Gallery from "react-photo-gallery";
import Modal from 'react-modal';



const customStyles = {
  content : {
    background: 'rgba(21,21,21,0.0)',
    color:'white',
    border: 'none',
    overflow:'hidden'
  },
  overlay: {
    background: 'rgba(21,21,21,0.9)',
  }
};
const GalleryImages = ({ images }) => {
  console.log(images);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    // setCurrentImage(0);
    setViewerIsOpen(false);
  };

  let photos = [];

  const options = [
    {
      width: 4,
      height: 3
    },
    {
      width: 1,
      height: 1
    },
    {
      width: 3,
      height: 4
    }
  ];

  images.forEach(item => {
    var option = options[Math.floor(Math.random() * options.length)];
    photos.push({
      src: item.url,
      width: option.width,
      height: option.height,
      name: item.name,
      biliner: item.biliner
    });
  });

  return (
    <>
      <div className="subscribe-line subscribe-line-white">
        <Container>
          <Row>
            <Col md="8" sm="8">
            <Animated
                animationIn="fadeIn"
                animationInDelay={2000}
                isVisible={true}>
              <h1>
                Hello, <br />
                We are DTU Times
              </h1>
              </Animated>
              <Animated
              animationIn="flipInX"
              animationInDelay={2500}
              isVisible={true}
              >
              <h3>Let us tell you more about what we do.</h3>
              </Animated>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section">
        <Container>
          <div className="galImg">
          <Gallery photos={photos} onClick={openLightbox} margin={5} />
          </div>
            {viewerIsOpen ? (
              
              <Modal
              isOpen={viewerIsOpen}
              onRequestClose={closeLightbox}
              style= {customStyles}
              
              >
                <a role="button" onClick={closeLightbox} style={{marginLeft:'99%',cursor:'pointer'}}><img src={require("assets/icons/2.png")} height="28px" width="28px" /></a>
                <Row>
                  <Col md="6">
                  <Animated
                  animationIn='zoomIn'
                  animationInDelay={50}
                  isVisible={true}
                  >
                    <img src={photos[currentImage].src} width='90%' height='90%'/>
                    </Animated>
                  </Col>
                  <Col>
                  <Animated
                  animationIn='zoomIn'
                  animationInDelay={500}
                  isVisible={true}
                  >
                    <div style={{marginTop:'20%'}}>
                    <h2>{photos[currentImage].name}</h2>
                    <p>{photos[currentImage].biliner}</p>
                    </div>
                    </Animated>
                  </Col>
                </Row>
              </Modal>
              
            ) : null}
        </Container>
      </div>
    </>
  );
};

export default GalleryImages;
