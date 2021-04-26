import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if(userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    }

    return (
        <FormContainer>
            <div className="title">Войти</div>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <form onSubmit={submitHandler} className="form">  
                <div className="form__item">
                    <label className="form__label">Email*:</label>
                    <input type="email"placeholder="Введите Email"value={email} className="form__input" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form__item">
                    <label className="form__label">Пароль*:</label>
                    <input type="password" placeholder="Введите Пароль"value={password} onChange={(e) => setPassword(e.target.value)} className="form__input"/>
                </div>

                <button className="btn btn__sign-in" >
                    Войти
                </button>
            </form>

            <div className="register">
                <div>
                    Новый Пользователь? <Link to={redirect ? `/register?redirect=${redirect}` : '/redister'} >Регистрация</Link>
                </div>
            </div>
        </FormContainer>
    )
}

export default LoginScreen;
