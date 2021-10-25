import React from "react";

import { Helmet } from "react-helmet";

import LoaderComponent from "components/LoaderComponent";
import Quiz from "../sections/QuizSections/quiz";
import Countdown from "../sections/QuizSections/countdown";
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

const LandingPage = () => <LoaderComponent component={<Sections />} />;

export default LandingPage;