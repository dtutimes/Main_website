import "./quizSlider.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import CardNews from "./CardNews";
import Carousel from "./Carousel";

export default function App() {
  let cards = [
    {
      key: uuidv4(),
      content: <CardNews title={"questions"}/>
    },
    {
      key: uuidv4(),
      content: <CardNews title={"questions"}/>
    },
    {
      key: uuidv4(),
      content: <CardNews title={"questions"}/>
    },

  ]; /*.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });*/

  return (
    <div className="QuizSliderApp" style={{
        backgroundColor:"#0c0c0c",
        paddingTop:"2em"
        // backgroundImage:
        //   "url(" + require("assets/img/space-bgd.jpg") + ")",
        //   backgroundSize:"cover"
      }}>
      {/*<div style={{ width: "80%", height: "500px", margin: "0 auto" }}>
        <Carousel
          slides={cards}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          showNavigation={showArrows}
          animationConfig={config.gentle}
        />
  </div>*/}
      <Carousel
        cards={cards}
        height="500px"
        width="80%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
    </div>
  );
}
