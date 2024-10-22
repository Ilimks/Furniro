import React from 'react';
import picture1 from "../../Img/Picture1.svg"
import picture2 from "../../Img/Picture2.svg"
import picture3 from "../../Img/Picture3.svg"
import picture4 from "../../Img/Picture4.svg"
import picture5 from "../../Img/Picture5.svg"
import picture6 from "../../Img/Picture6.svg"
import picture7 from "../../Img/Picture7.svg"
import picture8 from "../../Img/Picture8.svg"
import picture9 from "../../Img/Picture9.svg"

const SectionPicture = () => {
    return (
        <section className='picture'>
            <div className="container">
                <p className='picture__text'>Share your setup with</p>
                <h2 className='picture__furniro'>#FuniroFurniture</h2>
                <div className="picture__box">
                    <img className='picture__1' src={picture1} alt="" />
                    <img className='picture__2' src={picture2} alt="" />
                    <img className='picture__3' src={picture3} alt="" />
                    <img className='picture__4' src={picture4} alt="" />
                    <img className='picture__5' src={picture5} alt="" />
                    <img className='picture__6' src={picture6} alt="" />
                    <img className='picture__7' src={picture7} alt="" />
                    <img className='picture__8' src={picture8} alt="" />
                    <img className='picture__9' src={picture9} alt="" />
                    <div className="picture__space"></div>
                </div>
            </div>
        </section>
    );
};

export default SectionPicture;