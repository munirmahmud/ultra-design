import React from 'react';
import { Hero, Pricing } from '../../components';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
    return (
        <>
            <Hero {...homeObjOne} />
            <Hero {...homeObjThree} />
            <Hero {...homeObjTwo} />
            <Pricing />
            <Hero {...homeObjFour} />
        </>
    )
}

export default Home
