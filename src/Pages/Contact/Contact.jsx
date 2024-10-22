import React from 'react';
import "./Contact.css"
import SectionContactBanner from './SectionContactBanner';
import SectionContactGet from './SectionContactGet';
import SectionContactQuality from './SectionContactQuality';

const Contact = () => {
    return (
        <>
            <SectionContactBanner/>
            <SectionContactGet/>
            <SectionContactQuality/>
        </>
    );
};

export default Contact;