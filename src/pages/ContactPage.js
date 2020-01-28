import React from 'react'

import Contact from "sections/ContactSection/contact";
// import ContactHeader from "components/PageHeaders/ContactHeader";
import LoaderComponent from "components/LoaderComponent";

 
const Sections = () => (
    <>
        {/* <ContactHeader /> */}
        <Contact />
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;