import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Rating from '../components/Rating';
import { listProductDetails } from '../actions/productActions';
import { productDetailsReducer } from '../reducers/productReducers';

const ProductScreen = ({ match }) => {
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.productDetails);
    const { loading, error, product } = productDetails;

    useEffect(() => {
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match]);


    return (
        <div className="product-screen">
            <div className="container">
                <Link className="btn btn__back" to="/">
                    Назад
                </Link>
                {loading 
                ? <Loader /> 
                : error ? 
                ( 
          <h3 className="errorScreen">{error}</h3>
        ) : (
            <div className="product-screen__wrapper">
                <div className="product-screen__up">
                        <div className="product-screen__title">
                            {product.name}
                        </div>
                        <div className="product-screen__brand-title">
                            <div className="product-screen__brand-img">
                                <img src={product.brandImg} alt={product.name}></img>
                            </div>
                            <div className="product-screen__brand-text">
                                {product.brand}
                            </div>
                        </div>
                        <div className="line"></div>
                    </div>
                <div className="product-screen__down">
                    <div className="product-screen__img">
                        <img src={product.image} alt={product.name}></img>
                    </div>
                    <div>
                        <div className="product-screen__descr">
                            {product.description}
                        </div>
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
        )}

            </div>
        </div>
    )
}

export default ProductScreen
