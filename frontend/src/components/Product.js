import React from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';

const Product = ( {product} ) => {
    const reviews = ``
    return (
        <div className="product">
            <div className="container">
                <div className="card">
                    <div className="card__img">
                        <Link to={`/product/${product._id}`}>
                            <img src={product.image} alt="product_img"></img>
                        </Link>
                    </div>
                    <div className="card__text">
                        <Link to={`/product/${product._id}`}>
                            <div className="card__title">
                                {product.name}
                            </div>
                        </Link>

                        <div className="card__rating">
                            <Rating 
                                value={product.rating} 
                                text={`${product.numReviews} 
                                ${(product.numReviews) === 0 
                                ? 'отзывов'
                                : (product.numReviews) === 1 
                                ? 'отзыв'
                                :  (product.numReviews) <= 4 
                                ? 'отзыва' 
                                :  (product.numReviews) > 5 
                                ? 'отзывов'
                                : 'отзывов'}`}
                            
                            />

                        </div>
                        <div className="card__price">
                            {product.price} &#8381;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Product
