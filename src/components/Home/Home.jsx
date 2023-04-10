import React from 'react';
import HeaderSection from '../HeaderSection/HeaderSection';
import JobCategory from '../JobCategory/JobCategory';
import FeaturesJob from '../FeaturesJob/FeaturesJob';

const Home = () => {
    return (
        <div>
            <HeaderSection></HeaderSection>
            <JobCategory></JobCategory>
            <FeaturesJob></FeaturesJob>
        </div>
    );
};

export default Home;