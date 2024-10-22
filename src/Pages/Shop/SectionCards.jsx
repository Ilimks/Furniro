import React, { useState } from 'react';
import productsCardOne from "../../Img/image card1.svg";
import productsCardTwo from "../../Img/image card2.svg";
import productsCardThree from "../../Img/image card3.svg";
import productsCardFour from "../../Img/image card4.svg";

const SectionCards = () => {

    const [isHoverCard1, setIsHoverCard1] = useState(false);
    const [isHoverCard2, setIsHoverCard2] = useState(false);
    const [isHoverCard3, setIsHoverCard3] = useState(false);
    const [isHoverCard4, setIsHoverCard4] = useState(false);
   

    return (
        <section className='products'>
            <div className="container">
               <div className="products__cards">
      
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard1(true)}
                    onMouseLeave={() => setIsHoverCard1(false)}>
                    <img className="img__card" src={productsCardOne} alt="Syltherine" />
                    <h4 className="name__card">Syltherine</h4>
                    <p className="title__card">Stylish cafe chair</p>
                    <p className="price__card">Rp 2.500.000</p>
                    {isHoverCard1 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard2(true)}
                    onMouseLeave={() => setIsHoverCard2(false)}>
                    <img className="img__card" src={productsCardTwo} alt="Leviosa" />
                    <h4 className="name__card">Leviosa</h4>
                    <p className="title__card">Stylish cafe chair</p>
                    <p className="price__card">Rp 2.500.000</p>
                    {isHoverCard2 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard3(true)}
                    onMouseLeave={() => setIsHoverCard3(false)}>
                    <img className="img__card" src={productsCardThree} alt="Lolito" />
                    <h4 className="name__card">Lolito</h4>
                    <p className="title__card">Luxury big sofa</p>
                    <p className="price__card">Rp 7.000.000</p>
                    {isHoverCard3 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard4(true)}
                    onMouseLeave={() => setIsHoverCard4(false)}>
                    <img className="img__card" src={productsCardFour} alt="Respira" />
                    <h4 className="name__card">Respira</h4>
                    <p className="title__card">Outdoor bar table and stool</p>
                    <p className="price__card">Rp 500.000</p>
                    {isHoverCard4 && <button className="products__buy__btn">Add to cart</button>}
                </div>

                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard1(true)}
                    onMouseLeave={() => setIsHoverCard1(false)}>
                    <img className="img__card" src={productsCardOne} alt="Syltherine" />
                    <h4 className="name__card">Syltherine</h4>
                    <p className="title__card">Stylish cafe chair</p>
                    <p className="price__card">Rp 2.500.000</p>
                    {isHoverCard1 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard2(true)}
                    onMouseLeave={() => setIsHoverCard2(false)}>
                    <img className="img__card" src={productsCardTwo} alt="Leviosa" />
                    <h4 className="name__card">Leviosa</h4>
                    <p className="title__card">Stylish cafe chair</p>
                    <p className="price__card">Rp 2.500.000</p>
                    {isHoverCard2 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard3(true)}
                    onMouseLeave={() => setIsHoverCard3(false)}>
                    <img className="img__card" src={productsCardThree} alt="Lolito" />
                    <h4 className="name__card">Lolito</h4>
                    <p className="title__card">Luxury big sofa</p>
                    <p className="price__card">Rp 7.000.000</p>
                    {isHoverCard3 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard4(true)}
                    onMouseLeave={() => setIsHoverCard4(false)}>
                    <img className="img__card" src={productsCardFour} alt="Respira" />
                    <h4 className="name__card">Respira</h4>
                    <p className="title__card">Outdoor bar table and stool</p>
                    <p className="price__card">Rp 500.000</p>
                    {isHoverCard4 && <button className="products__buy__btn">Add to cart</button>}
                </div>

                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard1(true)}
                    onMouseLeave={() => setIsHoverCard1(false)}>
                    <img className="img__card" src={productsCardOne} alt="Syltherine" />
                    <h4 className="name__card">Syltherine</h4>
                    <p className="title__card">Stylish cafe chair</p>
                    <p className="price__card">Rp 2.500.000</p>
                    {isHoverCard1 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard2(true)}
                    onMouseLeave={() => setIsHoverCard2(false)}>
                    <img className="img__card" src={productsCardTwo} alt="Leviosa" />
                    <h4 className="name__card">Leviosa</h4>
                    <p className="title__card">Stylish cafe chair</p>
                    <p className="price__card">Rp 2.500.000</p>
                    {isHoverCard2 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard3(true)}
                    onMouseLeave={() => setIsHoverCard3(false)}>
                    <img className="img__card" src={productsCardThree} alt="Lolito" />
                    <h4 className="name__card">Lolito</h4>
                    <p className="title__card">Luxury big sofa</p>
                    <p className="price__card">Rp 7.000.000</p>
                    {isHoverCard3 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard4(true)}
                    onMouseLeave={() => setIsHoverCard4(false)}>
                    <img className="img__card" src={productsCardFour} alt="Respira" />
                    <h4 className="name__card">Respira</h4>
                    <p className="title__card">Outdoor bar table and stool</p>
                    <p className="price__card">Rp 500.000</p>
                    {isHoverCard4 && <button className="products__buy__btn">Add to cart</button>}
                </div>

                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard1(true)}
                    onMouseLeave={() => setIsHoverCard1(false)}>
                    <img className="img__card" src={productsCardOne} alt="Syltherine" />
                    <h4 className="name__card">Syltherine</h4>
                    <p className="title__card">Stylish cafe chair</p>
                    <p className="price__card">Rp 2.500.000</p>
                    {isHoverCard1 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard2(true)}
                    onMouseLeave={() => setIsHoverCard2(false)}>
                    <img className="img__card" src={productsCardTwo} alt="Leviosa" />
                    <h4 className="name__card">Leviosa</h4>
                    <p className="title__card">Stylish cafe chair</p>
                    <p className="price__card">Rp 2.500.000</p>
                    {isHoverCard2 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard3(true)}
                    onMouseLeave={() => setIsHoverCard3(false)}>
                    <img className="img__card" src={productsCardThree} alt="Lolito" />
                    <h4 className="name__card">Lolito</h4>
                    <p className="title__card">Luxury big sofa</p>
                    <p className="price__card">Rp 7.000.000</p>
                    {isHoverCard3 && <button className="products__buy__btn">Add to cart</button>}
                </div>
                
                <div className="products__card"
                    onMouseEnter={() => setIsHoverCard4(true)}
                    onMouseLeave={() => setIsHoverCard4(false)}>
                    <img className="img__card" src={productsCardFour} alt="Respira" />
                    <h4 className="name__card">Respira</h4>
                    <p className="title__card">Outdoor bar table and stool</p>
                    <p className="price__card">Rp 500.000</p>
                    {isHoverCard4 && <button className="products__buy__btn">Add to cart</button>}
                </div>

               </div>
            </div>
        </section>
    );
};

export default SectionCards;