import React, { useState } from 'react';
import productsCardOne from "../../Img/image card1.svg";
import productsCardTwo from "../../Img/image card2.svg";
import productsCardThree from "../../Img/image card3.svg";
import productsCardFour from "../../Img/image card4.svg";
import productsCardFive from "../../Img/image card5.svg";
import productsCardSix from "../../Img/image card6.svg";
import productsCardSeven from "../../Img/image card7.svg";
import productsCardEight from "../../Img/image card8.svg";

const SectionProducts = () => {

  const [isHoverCard1, setIsHoverCard1] = useState(false);
  const [isHoverCard2, setIsHoverCard2] = useState(false);
  const [isHoverCard3, setIsHoverCard3] = useState(false);
  const [isHoverCard4, setIsHoverCard4] = useState(false);
  const [isHoverCard5, setIsHoverCard5] = useState(false);
  const [isHoverCard6, setIsHoverCard6] = useState(false);
  const [isHoverCard7, setIsHoverCard7] = useState(false);
  const [isHoverCard8, setIsHoverCard8] = useState(false);

  return (
    <section className="products">
      <div className="container">
        <h2 className="products__name">Our Products</h2>
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
              onMouseEnter={() => setIsHoverCard5(true)}
              onMouseLeave={() => setIsHoverCard5(false)}>
              <img className="img__card" src={productsCardFive} alt="Grifo" />
              <h4 className="name__card">Grifo</h4>
              <p className="title__card">Night lamp</p>
              <p className="price__card">Rp 1.500.000</p>
              {isHoverCard5 && <button className="products__buy__btn">Add to cart</button>}
          </div>
          
          <div className="products__card"
              onMouseEnter={() => setIsHoverCard6(true)}
              onMouseLeave={() => setIsHoverCard6(false)}>
              <img className="img__card" src={productsCardSix} alt="Muggo" />
              <h4 className="name__card">Muggo</h4>
              <p className="title__card">Small mug</p>
              <p className="price__card">Rp 150.000</p>
              {isHoverCard6 && <button className="products__buy__btn">Add to cart</button>}
          </div>
          
          <div className="products__card"
              onMouseEnter={() => setIsHoverCard7(true)}
              onMouseLeave={() => setIsHoverCard7(false)}>
              <img className="img__card" src={productsCardSeven} alt="Pingky" />
              <h4 className="name__card">Pingky</h4>
              <p className="title__card">Cute bed set</p>
              <p className="price__card">Rp 7.000.000</p>
              {isHoverCard7 && <button className="products__buy__btn">Add to cart</button>}
          </div>
          
          <div className="products__card"
              onMouseEnter={() => setIsHoverCard8(true)}
              onMouseLeave={() => setIsHoverCard8(false)}>
              <img className="img__card" src={productsCardEight} alt="Potty" />
              <h4 className="name__card">Potty</h4>
              <p className="title__card">Minimalist flower pot</p>
              <p className="price__card">Rp 500.000</p>
              {isHoverCard8 && <button className="products__buy__btn">Add to cart</button>}
          </div>

        </div>
        <button className="products__btn">Show More</button>
      </div>
    </section>
  );
};

export default SectionProducts;