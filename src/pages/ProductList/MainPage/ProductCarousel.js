import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductCarousel.scss';

const ProductCarousel = () => {
  const TOTAL_PRODUCT_SLIDES = PRODUCTS.length - 5;
  const [currentIdx, setCurrentIdx] = useState(0);

  const moveProductCarousel = {
    transition: 'all 0.5s ease-in-out',
    transform: `translateX(-${currentIdx * 266}px)`,
  };

  const nextProduct = () => {
    if (currentIdx >= TOTAL_PRODUCT_SLIDES) {
      return;
    } else {
      setCurrentIdx(prev => prev + 1);
    }
  };

  const prevProduct = () => {
    if (currentIdx === 0) {
      return;
    } else {
      setCurrentIdx(prev => prev - 1);
    }
  };

  return (
    <div className="mainProductList">
      <h1 className="productTitle">
        가격 거품을 걷어내고, 성분에 집중한 스킨케어
      </h1>
      <div className="productCarousel">
        <div className="productCarouselBox " style={moveProductCarousel}>
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} card={product} />
          ))}
        </div>
      </div>
      {currentIdx !== 0 && (
        <div className="prevProductSlideButton" onClick={prevProduct}>
          〈
        </div>
      )}
      {currentIdx < TOTAL_PRODUCT_SLIDES && (
        <div className="nextProductSlideButton" onClick={nextProduct}>
          〉
        </div>
      )}
    </div>
  );
};

const ProductCard = ({ card }) => {
  return (
    <div className="card">
      <div className="cardImage">
        <Link to={card.link}>
          <img alt="banner" src={card.url} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCarousel;

const PRODUCTS = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1670062933973-d4dc58467a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1670062933973-d4dc58467a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1670062933973-d4dc58467a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1670062933973-d4dc58467a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1670062933973-d4dc58467a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1670062933973-d4dc58467a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1670062933973-d4dc58467a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1670062933973-d4dc58467a9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
];
