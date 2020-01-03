import React from 'react'

import Header from "components/PageHeaders/AboutHeader";
import LoaderComponent from "components/LoaderComponent";
import IconSections from 'sections/AboutSections/IconSections';
import EditiorsMessage from 'sections/AboutSections/EditorsMessage';

const Sections = () => (
    <>
        <Header />
        <IconSections />
        <EditiorsMessage />
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;