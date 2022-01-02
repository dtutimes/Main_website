import React from "react";

import { Helmet } from "react-helmet";

import LoaderComponent from "components/LoaderComponent";
import Quiz from "../sections/QuizSingleSections/quiz";
import Countdown from "../sections/QuizSingleSections/countdown";
const title = "DTU Times | Quiz";
const Sections = () => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {
        <Countdown></Countdown>
    }
    {
      // <Quiz></Quiz>
    }
  </>
);

const LandingPage = () => {
  React.useEffect(()=>{
    document.body.scrollTop = 0;
  })
  document.documentElement.classList.remove("nav-open");
  return <LoaderComponent component={<Sections />} />;
  
};

export default LandingPage;