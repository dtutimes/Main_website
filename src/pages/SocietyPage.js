import React from 'react'

import Header from "components/PageHeaders/LandingHeader";
import LoaderComponent from "components/LoaderComponent";
import Presentation from '../views/SocietiesIndex';

 
const Sections = () => (
    <>
        <Header />
        <Presentation/>
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;