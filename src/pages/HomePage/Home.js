import React from 'react';
import { Hero } from '../../components';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from './Data';

const Home = () => {
    return (
        <>
            <Hero {...homeObjOne} />
            <Hero {...homeObjTwo} />
            <Hero {...homeObjThree} />
            <Hero {...homeObjFour} />
        </>
    )
}

export default Home
