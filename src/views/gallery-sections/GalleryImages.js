import React, { useState, useCallback, useEffect } from "react";

import { Container, Row, Col } from "reactstrap";

//
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

const GalleryImages = ({ images }) => {
  console.log(images);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
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
      height: option.height
    });
  });

  return (
    <>
      <div className="subscribe-line subscribe-line-white">
        <Container>
          <Row>
            <Col md="8" sm="8">
              <h1>
                Hello, <br />
                We are DTU Times
              </h1>
              <h3>Let us tell you more about what we do.</h3>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="section">
        <Container>
          <Gallery photos={photos} onClick={openLightbox} margin={1} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </Container>
      </div>
    </>
  );
};

export default GalleryImages;
