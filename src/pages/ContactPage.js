import React from 'react'

import {Helmet} from 'react-helmet';

import Contact from "sections/ContactSection/contact";
import LoaderComponent from "components/LoaderComponent";
const title = "DTU Times | Contact Us";
const Sections = () => (
    <>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        <Contact />
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;