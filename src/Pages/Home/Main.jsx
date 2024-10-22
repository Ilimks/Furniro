import React from 'react';
import "../Home/Main.css"
import SectionMask from './SectionMask';
import SectionRange from './SectionRange';
import SectionProducts from './SectionProducts';
import SectionPicture from './SectionPicture';

const Main = () => {
    return (
        <>
            <SectionMask/>
            <SectionRange/>
            <SectionProducts/>
            <SectionPicture/>
        </>
    );
};

export default Main;