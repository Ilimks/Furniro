import React, { useState, useEffect } from 'react';
import logo from "../../Img/Frame 168.svg"
import akar1 from "../../Img/mdi_account-alert-outline.svg"
import akar2 from "../../Img/akar-icons_search.svg"
import akar3 from "../../Img/akar-icons_heart.svg"
import akar4 from "../../Img/ant-design_shopping-cart-outlined.svg"
import "./Header.css"
import BasketPopup from '../BasketPopup/BasketPopup';
import { Link } from 'react-router-dom';



const Header = () => {
    
    const [scrolled, setScrolled] = useState(false);
    const [basket, setBasket] = useState(false)

    useEffect(()=>{
        const headScroll = () => {
            setScrolled(window.scrollY > 90);
        };
        window.addEventListener('scroll', headScroll);
        return () => window.removeEventListener('scroll', headScroll);
    }, []);



    return (
        <header  className={`header ${scrolled ? 'header__scroll' : ''}`}>
            <div className="container">
                <img className='logo__img' src={logo}/>
                <ul className='nav'>
                    <Link to={'/'} className='header__li'>Home</Link>
                    <Link to={'/shop'} className='header__li'>Shop</Link>
                    <Link to={'/'} className='header__li'>About</Link>
                    <Link to={'/contact'} className='header__li'>Contact</Link>
                </ul>
                <div className="ant">
                    <img className='ant__img' src={akar1}/>
                    <img className='ant__img' src={akar2}/>
                    <img className='ant__img' src={akar3}/>
                    <img onClick={()=> setBasket(true)} className='ant__img' src={akar4}/>
                    <BasketPopup active={basket} setActive={setBasket}/>
                </div>
            </div>
        </header>
    );
};

export default Header;