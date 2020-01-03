import React from 'react'

import Header from "components/PageHeaders/LandingHeader";
import LoaderComponent from "components/LoaderComponent";

 
const Sections = () => (
    <>
        <Header />
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;