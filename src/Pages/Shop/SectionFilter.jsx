import React from 'react';
import filter1 from "../../Img/FilterImg1.svg"
import filter2 from "../../Img/FilterImg2.svg"
import filter3 from "../../Img/FilterImg3.svg"

const SectionFilter = () => {
    return (
        <section className='filter'>
            <div className="container">
                <div className="filter__box">

                    <div className="filter__box__left">
                        <img className='filter__box__img1' src={filter1} alt="" />
                        <p className='filter__box__text__left1'>Filter</p>
                        <img className='filter__box__img2' src={filter2} alt="" />
                        <img className='filter__box__img3' src={filter3} alt="" />
                        <p className='filter__box__text__left2'>Showing 1–16 of 32 results</p>
                    </div>

                    <div className="filter__box__right">
                        <div className="filter__box__right__left">
                            <p className='filter__box__right__text1'>Show</p>
                            <div className="filter__box__right__right__default1">
                                <p className='filter__default1'>16</p>
                            </div>
                        </div>
                        <div className="filter__box__right__right">
                            <p className='filter__box__right__text2'>Short by</p>
                            <div className="filter__box__right__right__default2">
                                <p className='filter__default2'>Default</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFilter;