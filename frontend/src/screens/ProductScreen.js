import React from 'react'
import { Link } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';

const ProductScreen = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id)
    return (
        <div className="product-screen">
            <div className="container">
                <Link className="btn btn__back" to="/">
                    Назад
                </Link>
                <div className="product-screen__wrapper">
                    <div className="product-screen__img">
                        <img src={product.image} alt={product.name}></img>
                    </div>
                    <div className="product-screen__text">
                        <div className="product-screen__title">
                            {product.name}
                        </div>
                        <div className="line"></div>
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
                        <div className="product-screen__descr">
                                {product.description}
                        </div>
                    </div>
                    <div className="product-screen__sell">
                        <div className="product-screen__price">
                            {product.price} &#8381;
                        </div>
                        <div className="product-screen__status">
                            {product.countInStock > 0 ? 'В наличии' : 'Нет в наличии'}
                        </div>
                        <button className="btn btn__add" disabled={product.countInStock === 0}>
                                Добавить в Корзину
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen
