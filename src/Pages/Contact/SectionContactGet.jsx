import React from 'react';

const SectionContactGet = () => {
    return (
        <section className='contact__get'>
            <div className="container">
                <h2 className='contact__get__name'>Get In Touch With Us</h2>
                <p className='contact__get__text'>For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
                <div className="contact__get__box">

                    <div className="contact__get__box__info">
                        <div className="get__info__address">
                            <h5 className='get__info__address__name'>Address</h5>
                            <p className='get__info__address__text'>236 5th SE Avenue, New York NY10000, United States</p>
                        </div>
                        <div className="get__info__phone">
                            <h5 className='get__info__phone__name'>Phone</h5>
                            <p className='get__info__phone__text'>Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
                        </div>
                        <div className="get__info__working">
                            <h5 className='get__info__working__name'>Working Time</h5>
                            <p className='get__info__working__text'>Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
                        </div>
                    </div>

                    <div className="contact__get__box__registr">
                        <div className='get__registr__input1'>
                            <h5 className='get__registr__input__name'>Your name</h5>
                            <input className='get__input1' type="text" name="" id="" placeholder='Abc' required/>
                        </div>

                        <div className='get__registr__input2'>
                            <h5 className='get__registr__input__name'>Email address</h5>
                            <input className='get__input2' type="imail" name="" id="" placeholder='Abc@def.com' required/>
                        </div>

                        <div className='get__registr__input3'>
                            <h5 className='get__registr__input__name'>Subject</h5>
                            <input className='get__input3' type="text" name="" id="" placeholder='This is an optional' required/>
                        </div>

                        <div className='get__registr__area'>
                            <h5 className='get__registr__input__name'>Message</h5>
                            <textarea className='get__arera' name="" id="" placeholder='Hi! i’d like to ask about'></textarea>
                        </div>

                        <button className='get__btn'>Submit</button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionContactGet;