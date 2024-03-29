import React from "react";

// import Header from "components/PageHeaders/BlogHeader";
import LoaderComponent from "components/LoaderComponent";
import { Helmet } from "react-helmet";
import QuizSlider from "../sections/QuizSections/QuizSlider";
import Header from "components/PageHeaders/QuizHeader";
const title = "DTU Times | Quiz";
const Sections = () => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />


    <QuizSlider></QuizSlider>
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