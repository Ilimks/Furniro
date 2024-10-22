import React from 'react';
import rangeCard1 from "../../Img/Mask Group.svg"
import rangeCard2 from "../../Img/Image-living room.svg"
import rangeCard3 from "../../Img/Mask Group (1).svg"

const SectionRange = () => {
    return (
            <section className='range'>
                <div className="container">
                    <h3 className='range__browse'>Browse The Range</h3>
                    <p className='range__text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="range__box__cards">
                        <div className="range__card__left">
                            <img className='range__card__left__img' src={rangeCard1}/>
                            <h4 className='range__card__left__text'>Dining</h4>
                        </div>
                        <div className="range__card__center">
                            <img className='range__card__center__img' src={rangeCard2}/>
                            <h4 className='range__card__center__text'>Living</h4>
                        </div>
                        <div className="range__card__right">
                            <img className='range__card__right__img' src={rangeCard3}/>
                            <h4 className='range__card__right__text'>Bedroom</h4>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default SectionRange;