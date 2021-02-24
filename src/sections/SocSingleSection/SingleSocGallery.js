import React , { useState, useEffect } from 'react';
import Slider from "react-slick";

// import '../../assets/scss/_singlesinglesoc.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SingleSocGallery({items}) {
    const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);
  const slidesData = items.map((x, index)=>{
    return ({
        id:index+1,
        url:x
    })
})
// const slidesData = [];
// items.forEach((x, index)=>{
//     let i = {url: x, id: index};
//     slidesData.push(i);
// })
  useEffect(() => {

    setNav1(slider1);
    setNav2(slider2);

  });
    const settingsMain = {
        adaptiveHeight:true,
        autoplay:true,
        dots: false,
        infinite: true,
        speed: 1000,
        fade:true,
        arrows:false,
        lazyLoad: 'progressive',
        asNavFor: '.slider-nav'
      };
      
    //   console.log(slidesDsata);
    //   const slidesData = [
    //     {
    //       id: 1,
    //       url:'https://i.ytimg.com/vi/Cfn4xfl5weM/maxresdefault.jpg'
    //     }, {
    //       id: 2,
    //       url:'https://i.ytimg.com/vi/Cfn4xfl5weM/maxresdefault.jpg'
    //     }, {
    //       id: 3,
    //       url:'https://i.ytimg.com/vi/Cfn4xfl5weM/maxresdefault.jpg'
    //     }, {
    //       id: 4,
    //       url:'https://i.ytimg.com/vi/Cfn4xfl5weM/maxresdefault.jpg'
    //     }, {
    //       id: 5,
    //       url:'https://i.ytimg.com/vi/Cfn4xfl5weM/maxresdefault.jpg'
    //     }, {
    //       id: 6,
    //       url:'https://images.unsplash.com/photo-1612436442220-d9b20ade4c7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80'
    //     },
    //   ];
      console.log(slidesData);
    // const settingsMain = {
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    //   };
    
      const settingsThumbs = {
          arrows:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px',
        responsive: [
            {
              breakpoint: 700,
              settings: {
                arrows: true,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 500,
              settings: {
                arrows: true,
                slidesToShow: 3
              }
            },
            {
              breakpoint: 400,
              settings: {
                arrows: true,
                slidesToShow: 3
              }
            }
          ]
      };
      return (

        <div className="App">
    
          <div className="slider-wrapper">
    
            <Slider
              {...settingsMain}
              asNavFor={nav2}
              ref={slider => (setSlider1(slider))}
            >
    
              {slidesData.map((slide) =>
    
                <div className="slick-slide" key={slide.id}>
                  
                  <img className="slick-slide-image" src={slide.url} />
                  
                </div>
    
              )}
    
            </Slider>
            <div className="thumbnail-slider-wrap">
              <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={slider => (setSlider2(slider))}>
    
                {slidesData.map((slide) =>
    
                  <div className="slick-slide" key={slide.id}>
                    <img className="slick-slide-image thumbnail-img-slick" src={slide.url} />
                  </div>
    
                )}
    
              </Slider>
            </div>
          </div>
    
        </div>
      );
    }
    



export default SingleSocGallery;