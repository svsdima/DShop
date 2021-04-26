import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id;

    const qty = location.search ? Number(location.search.split('=')[1]) : 1;

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;

    console.log(cartItems);

    useEffect(() => {
        if(productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        history.push('/login?redirect=shipping');
    }

    console.log(qty);

    return (
        <div className="cart-screen">
            <div className="container">
                <div className="title">Корзина</div>
                <div className="cart-screen__wrapper">
                    {cartItems.length === 0 
                    ? 
                    <Message>
                    <span>Ваша корзина пуста</span> <Link className="btn btn__back" to='/'>Назад</Link>
                    </Message>
                    : (
                        <div className="cart-screen__list">
                        {cartItems.map((item) => (
                          <div key={item.product} className="cart-screen__item">
                              <div className="img cart-screen__img">
                                <img src={item.image} alt={item.name}></img>
                              </div>
                              <div className="cart-screen__title">
                                  <Link to={`/product/${item.product}`} >{item.name}</Link>
                              </div>
                              <div className="cart-screen__price">
                                  {item.price} &#8381;
                              </div>
                              <div className="cart-screen__select-wrapper">
                                <select className="select cart-screen__select" value={item.qty} onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                    {[...Array(item.countInStock).keys()].map(x => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                              </div>
                              <div>
                                <button className="btn btn__delete" onClick={() => removeFromCartHandler(item.product)}>
                                    <i className="fas fa-trash"></i>
                                </button>
                              </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="cart-screen__subtotal">
                        <div className="title cart-screen__subtotal-title">
                            Итого
                        </div>
                        <div className="cart-screen__subtotal-item">
                            <div className="subtitle">
                                Кол-во: ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                            </div>
                            <div className="subtitle">
                                Цена: {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)} &#8381;
                            </div>
                        </div>
                        <button className="btn btn__checkout" disabled={cartItems.length === 0} onClick={checkoutHandler} >
                            Оформить заказ
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartScreen
