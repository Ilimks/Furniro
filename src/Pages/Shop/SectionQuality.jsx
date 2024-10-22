import React from 'react';
import quality1 from '../../Img/Quality1.svg'
import quality2 from '../../Img/Quality2.svg'
import quality3 from '../../Img/Quality3.svg'
import quality4 from '../../Img/Quality4.svg'

const SectionQuality = () => {
    return (
        <section className='quality'>
            <div className="container">
                <div className="quality__box">

                    <div className="quality__high">
                        <img className='quality__img' src={quality1} alt="" />
                        <div className="quality__free__box">
                            <h4 className='quality__name'>High Quality</h4>
                            <p className='quality__text'>crafted from top materials</p>
                        </div>
                    </div>

                    <div className="quality__warranty">
                        <img className='quality__img' src={quality2} alt="" />
                        <div className="quality__free__box">
                            <h4 className='quality__name'>Warranty Protection</h4>
                            <p className='quality__text'>Over 2 years</p>
                        </div>
                    </div>

                    <div className="quality__free">
                        <img className='quality__img' src={quality3} alt="" />
                        <div className="quality__free__box">
                            <h4 className='quality__name'>Free Shipping</h4>
                            <p className='quality__text'>Order over 150 $</p>
                        </div>
                    </div>

                    <div className="quality__support">
                        <img className='quality__img' src={quality4} alt="" />
                        <div className="quality__free__box">
                            <h4 className='quality__name'>24 / 7 Support</h4>
                            <p className='quality__text'>Dedicated support</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default SectionQuality;