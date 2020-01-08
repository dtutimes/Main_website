import React from 'react'

import Header from "components/PageHeaders/TeamHeader";
import LoaderComponent from "components/LoaderComponent";
import TeamTabs from "sections/TeamSections/TeamTabs";
 
const Sections = () => (
    <>
        <Header />
        <TeamTabs />
    </>
);

const LandingPage = () => <LoaderComponent component={<Sections />} />

export default LandingPage;