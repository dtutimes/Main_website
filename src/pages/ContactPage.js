import React from 'react'

import Contact from "views/contact-sections/contact";
import ContactHeader from "components/PageHeaders/ContactHeader";
import LoaderComponent from "components/LoaderComponent";

 
const Sections = () => (
    <>
        <ContactHeader />
        <Contact />
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;