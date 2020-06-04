import React from 'react'

import Contact from "sections/ContactSection/contact";
// import ContactHeader from "components/PageHeaders/ContactHeader";
import LoaderComponent from "components/LoaderComponent";
import {Helmet} from 'react-helmet';
const title = "DTU Times | Contact Us";
const Sections = () => (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        {/* <ContactHeader /> */}
        <Contact />
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;