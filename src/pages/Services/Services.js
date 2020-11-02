import React from 'react';
import { Hero, Pricing } from '../../components';
import { homeObjFour } from '../../data/Data';

const Services = () => {
    return (
        <>
            <Pricing />
            <Hero {...homeObjFour} />
        </>
    )
}

export default Services
