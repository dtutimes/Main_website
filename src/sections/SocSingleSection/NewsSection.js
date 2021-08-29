import React, { Component } from "react";
import Slider from "react-slick";
import './Soc.css';
import jQuery from 'jquery';
import $ from 'jquery';
import 'slider-pro/dist/css/slider-pro.min.css';
import sliderPro from 'slider-pro';

export default class SimpleSlider extends Component {
  componentDidMount(){
      $( '#my-slider' ).sliderPro({
			width: 670,
			height: 500,
			orientation: 'vertical',
			loop: false,
			arrows: true,
			buttons: false,
			thumbnailsPosition: 'right',
			thumbnailPointer: true,
			thumbnailWidth: 290,
			breakpoints: {
				800: {
					thumbnailsPosition: 'bottom',
					thumbnailWidth: 270,
					thumbnailHeight: 100
				},
				500: {
					thumbnailsPosition: 'bottom',
					thumbnailWidth: 120,
					thumbnailHeight: 50
				}
			}
		});
  }

  // render() {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   return (
//     <div>
//       <h2> News Section</h2>
//       <Slider {...settings} className="news_carousal">
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }
render(){
  
  return(
    <div id="my-slider" className="slider-pro">
      <div className="sp-slides">
      {
        this.props.news.map(x=>{
          // console.log(this.props.news[index].imgUrl);
          return (
            <div className="sp-slide">
              <img className="sp-image" src={x.imgUrl}  />
              <div className="sp-caption">{x.description}</div>
            </div>
          )
        })
      }
      </div>
      <div className="sp-thumbnails">
        {
          this.props.news.map(x=>{
            return (
              <div className="sp-thumbnail">
                <div className="sp-thumbnail-image-container">
                  <img className="sp-thumbnail-image" src={x.imgUrl} />
                  
                </div>
                <div className="sp-thumbnail-text">
                  <div className="sp-thumbnail-title">{x.title}</div>
                  <div className="sp-thumbnail-description">{x.description}</div>
                </div>
              </div>
            )
          })
        }
      </div>  
    </div> 
  );
}
  

}
