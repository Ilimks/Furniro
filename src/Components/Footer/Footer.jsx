import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__line"></div>
            <div className="container">
                <div className="footer__box">

                    <div className="funiro__footer">
                        <h3 className='funiro__name'>Furniro.</h3>
                        <p className='funiro__text'>400 University Drive Suite 200 Coral</p>
                        <p className='funiro__text'>Gables,</p>
                        <p className='funiro__text'>FL 33134 USA</p>
                    </div>

                    <div className="links__footer">
                        <p className='links__name'>Links</p>
                        <ul className='footer__nav'>
                            <li className='footer__li'>Home</li>
                            <li className='footer__li'>Shop</li>
                            <li className='footer__li'>About</li>
                            <li className='footer__li'>Contact</li>
                        </ul>
                    </div>

                    <div className="help__footer">
                    <p className='help__name'>Help</p>
                        <ul className='footer__help__nav'>
                            <li className='footer__help__li'>Payment Options</li>
                            <li className='footer__help__li'>Returns</li>
                            <li className='footer__help__li'>Privacy Policies</li>
                        </ul>
                    </div>

                    <div className="newsletter__footer">
                        <p className='newsletter__name'>Newsletter</p>
                        <div className='footer__input__box'>
                            <input className='footer__input' type="imail" placeholder='Enter Your Email Address'/>
                            <button className='footer__btn'>SUBSCRIBE</button>
                        </div>
                    </div>

                </div>
                <div className="footer__line__bottom"></div>
                <p className='footer__text__bottom'>2023 furniro. All rights reverved</p>
            </div>
        </footer>
    );
};

export default Footer;