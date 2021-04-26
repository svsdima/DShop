import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../actions/userActions';

const RegisterScreen = ({ location, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userRegister = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userRegister;

    const redirect = location.search ? location.search.split('=')[1] : '/';

    useEffect(() => {
        if(userInfo) {
            history.push(redirect);
        }
    }, [history, userInfo, redirect]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Пароль не совпадает!');
        } else {
            dispatch(register(name, email, password));
        }
    }

    return (
        <FormContainer>
            <div className="title">Регистрация</div>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <Loader/>}
            <form onSubmit={submitHandler} className="form"> 
                <div className="form__item">
                    <label className="form__label">Имя*:</label>
                    <input type="name"placeholder="Введите Имя"value={name} className="form__input" onChange={(e) => setName(e.target.value)} />
                </div> 
                <div className="form__item">
                    <label className="form__label">Email*:</label>
                    <input type="email"placeholder="Введите Email"value={email} className="form__input" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form__item">
                    <label className="form__label">Пароль*:</label>
                    <input type="password" placeholder="Введите Пароль"value={password} onChange={(e) => setPassword(e.target.value)} className="form__input"/>
                </div>
                <div className="form__item">
                    <label className="form__label">Подтвердите Пароль*:</label>
                    <input type="confirmPassword" placeholder="Подтвердите Пароль"value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="form__input"/>
                </div>

                <button className="btn btn__sign-in" >
                    Регистрация
                </button>
            </form>

            <div className="login">
                <div>
                    У вас уже есть аккаунт? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'} >Войти</Link>
                </div>
            </div>
        </FormContainer>
    )
}

export default RegisterScreen;
