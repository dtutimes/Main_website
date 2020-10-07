import React from "react";

import { Helmet } from "react-helmet";

import Header from "components/PageHeaders/AboutHeader";
import LoaderComponent from "components/LoaderComponent";
import IconSections from "sections/AboutSections/IconSections";
import EditiorsMessage from "sections/AboutSections/EditorsMessage";

const title = "DTU Times | About Us";
const Sections = () => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <Header />
    <IconSections />
    <EditiorsMessage />
  </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />;

export default LandingPage;
