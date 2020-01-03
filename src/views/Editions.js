import React from "react";

import SectionFeature from "./sections-sections/SectionFeature";
import LandingPageHeader from "components/Headers/LandingPageHeader";

export default class Editions extends React.Component {
  componentDidMount() {
    document.documentElement.classList.remove("nav-open");
  }
  render() {
    return (
      <>
        <LandingPageHeader />
        <SectionFeature />
      </>
    );
  }
}
