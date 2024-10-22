import React from 'react';
import quality1 from '../../Img/Quality1.svg'
import quality2 from '../../Img/Quality2.svg'
import quality3 from '../../Img/Quality3.svg'
import quality4 from '../../Img/Quality4.svg'

const SectionContactQuality = () => {
    return (
        <section className='contact__quality'>
            <div className="container">
                <div className="contact__quality__box">

                    <div className="contact__quality__high">
                        <img className='contact__quality__img' src={quality1} alt="" />
                        <div className="contact__quality__free__box">
                            <h4 className='contact__quality__name'>High Quality</h4>
                            <p className='contact__quality__text'>crafted from top materials</p>
                        </div>
                    </div>

                    <div className="contact__quality__warranty">
                        <img className='contact__quality__img' src={quality2} alt="" />
                        <div className="contact__quality__free__box">
                            <h4 className='contact__quality__name'>Warranty Protection</h4>
                            <p className='contact__quality__text'>Over 2 years</p>
                        </div>
                    </div>

                    <div className="contact__quality__free">
                        <img className='contact__quality__img' src={quality3} alt="" />
                        <div className="contact__quality__free__box">
                            <h4 className='contact__quality__name'>Free Shipping</h4>
                            <p className='contact__quality__text'>Order over 150 $</p>
                        </div>
                    </div>

                    <div className="contact__quality__support">
                        <img className='contact__quality__img' src={quality4} alt="" />
                        <div className="contact__quality__free__box">
                            <h4 className='contact__quality__name'>24 / 7 Support</h4>
                            <p className='contact__quality__text'>Dedicated support</p>
                        </div>
                    </div>
                
                </div> 
            </div>
        </section>
    );
};

export default SectionContactQuality;