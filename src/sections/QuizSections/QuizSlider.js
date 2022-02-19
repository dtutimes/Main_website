import "./quizSlider.css";
import React from "react";
import { v4 as uuidv4 } from "uuid";

import CardNews from "./CardNews";
import Carousel from "./Carousel";

export default function App() {

  let cards = [
    {
      key: uuidv4(),
      content: <CardNews 
        title={"Online Classes ka Anaadi ya Khiladi?"}
        description = {"Take this quiz and find out how good were you at surviving the travesty that was online classes. PS: There were no winners in online classes, only survivors."}
        img = {"OnlineClasses.gif"}
      />
        
    },
    {
      key: uuidv4(),
      content: <CardNews title={"Coming Soon"} img = {"comingsoon.jpg"}/>
    },
    {
      key: uuidv4(),
      content: <CardNews title={"Coming Soon"}  img = {"comingsoon.jpg"}/>
    },
    {
      key: uuidv4(),
      content: <CardNews title={"Coming Soon"}  img = {"comingsoon.jpg"}/>
    },
    {
      key: uuidv4(),
      content: <CardNews title={"Coming Soon"}  img = {"comingsoon.jpg"}/>
    }
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
