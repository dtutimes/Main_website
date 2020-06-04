import React from "react";

import Header from "components/PageHeaders/TeamHeader";
import LoaderComponent from "components/LoaderComponent";
import TeamTabs from "sections/TeamSections/TeamTabs";
import {Helmet} from 'react-helmet';
const title = "DTU Times | Team"
const Sections = () => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    <TeamTabs />
  </>
);

const LandingPage = () => {
  document.documentElement.classList.remove("nav-open");
   return (
    <>
      <LoaderComponent component={<Sections />} />
    </>
  );
};

export default LandingPage;
