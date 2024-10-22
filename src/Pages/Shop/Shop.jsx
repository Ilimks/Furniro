import React from 'react';
import "./Shop.css"
import SectionBanner from './SectionBanner'
import SectionFilter from './SectionFilter'
import SectionCards from './SectionCards';
import SectionNext from './SectionNext';
import SectionQuality from './SectionQuality';

const Shop = () => {
    return (
        <>
            <SectionBanner/>
            <SectionFilter/>
            <SectionCards/>
            <SectionNext/>
            <SectionQuality/>
        </>
    );
};

export default Shop;