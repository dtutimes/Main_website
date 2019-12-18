import React, { useState, useCallback, useEffect } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import axios from 'axios';

const photos = [
    {
      src: "http://dtutimes.dtu.ac.in/storage/51/conversions/GOP-JPEG-col-min-fullscreen.jpg",
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 4,
      height: 3,
    },
    {
      src: "http://dtutimes.dtu.ac.in/storage/117/conversions/683B9A9E-934C-493F-AFBC-329921D6B1A1-fullscreen.jpg",
      sizes: ["(min-width: 480px) 50vw,(min-width: 1024px) 33.3vw,100vw"],
      width: 1,
      height: 1
    },
]

const TimesCanvas= () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);
  const [data,setData] = useState([])
  const [loading,setLoad] = useState(false)

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  useEffect(()=>{
    document.body.classList.toggle("index-page")
})
useEffect(() => {
  const fetchData = async () => {
    const result = await axios(
      'http://api.dtutimes.live/v1/gallery/times-canvas-624',
    );
    setData(result.data);
    setLoad(true)
  };
  fetchData();
}, []);
if(loading!==true) {
  return (
    <>
    <div className="container black">
      <h1 className="text-center" style={{marginTop:'100px'}}>Times Canvas</h1>
      <h3 className="text-center">{data.biliner}</h3>
      <Gallery photos={photos} onClick={openLightbox} targetRowHeight={500}  margin={0}/>
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
    </div>
    </>
  );
} else {
  return(
    <p>Loading...</p>
  )
}
}
export default TimesCanvas;