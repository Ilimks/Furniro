import React from 'react';
import "./BasketPopup.css"
import popupClose from "../../Img/PopupClose.svg"
import popupImg1 from "../../Img/PopupImg1.svg"
import popupImg2 from "../../Img/PopupImg2.svg"
import popupImg3 from "../../Img/Popup card close.svg"


const BasketPopup = ({active, setActive}) => {
    return (
        <div onClick={()=> setActive(false)} className={active ? "popup active" : "popup"}>
            <div className={active ? "popup_content active" : "popup_content"}>

                <div className="popup__card__box">
                   <h3 className='popup__card__text'>Shopping Cart</h3>
                   <img className='popup__close' src={popupClose} alt="" />
                </div>

                <div className="popup__card__line"></div>

                <div className="popup__cards">
                    <div className="popup__cards__block">
                        <img src={popupImg1} alt="" />
                        <div className="popup__cards__price">
                           <h4 className='popup__cards__price__name'>Asgaard sofa</h4>
                           <p className='popup__cards__price__text'>1 X <span>Rs. 250,000.00</span></p>
                        </div>
                        <img src={popupImg3} alt="" />
                    </div>

                    <div className="popup__cards__block">
                        <img src={popupImg2} alt="" />
                        <div className="popup__cards__price">
                           <h4 className='popup__cards__price__name'>Asgaard sofa</h4>
                           <p className='popup__cards__price__text'>1 X <span>Rs. 270,000.00</span></p>
                        </div>
                        <img src={popupImg3} alt="" />
                    </div>
                </div>

                <div className="subtotal">
                    <p className='subtotal__name'>Subtotal</p>
                    <p className='subtotal__price__all'>Rs. 520,000.00</p>
                </div>

                <div className="popup__card__line__bottom"></div>

                <div className="popup__btn__bottom">
                    <button className='popup__btn1'>Cart</button>
                    <button className='popup__btn2'>Checkout</button>
                    <button className='popup__btn3'>Comparison</button>
                </div>
            </div>
        </div>
    );
};

export default BasketPopup;