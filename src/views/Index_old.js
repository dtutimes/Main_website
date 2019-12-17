import React from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import FooterBlack from "components/Footers/FooterBlack.js";
// sections for this page
import SectionButtons from "./index-sections/SectionButtons.js";
import SectionNavigation from "./index-sections/SectionNavigation.js";
import SectionNavbars from "./index-sections/SectionNavbars.js";
import SectionPreFooterAreas from "./index-sections/SectionPreFooterAreas.js";
import SectionFooterAreas from "./index-sections/SectionFooterAreas.js";
import SectionDescriptionAreas from "./index-sections/SectionDescriptionAreas.js";
import SectionTypography from "./index-sections/SectionTypography.js";
import SectionNotification from "./index-sections/SectionNotification.js";
import SectionTables from "./index-sections/SectionTables.js";
import SectionComments from "./index-sections/SectionComments.js";
import SectionCommentsAreaSmall from "./index-sections/SectionCommentsAreaSmall.js";
import SectionJavaScript from "./index-sections/SectionJavaScript.js";
import SectionCards from "./index-sections/SectionCards.js";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
    };
  });
  return (
    <>
      <ColorNavbar />
      <IndexHeader />
      <div className="main">
        <SectionButtons />
        <SectionNavigation />
      </div>
      <SectionNavbars />
      <SectionPreFooterAreas />
      <SectionFooterAreas />
      <SectionDescriptionAreas />
      <SectionTypography />
      <SectionNotification />
      <SectionTables />
      <SectionComments />
      <SectionCommentsAreaSmall />
      <SectionJavaScript />
      <SectionCards />
      <FooterBlack />
    </>
  );
}

export default Index;
