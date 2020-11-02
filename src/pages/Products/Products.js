import React from 'react';
import { Hero } from '../../components';
import { homeObjFour, homeObjThree, homeObjTwo } from '../../data/Data';

const Products = () => {
    return (
        <>
            <Hero {...homeObjFour} />
            <Hero {...homeObjThree} />
            <Hero {...homeObjTwo} />
        </>
    )
}

export default Products
