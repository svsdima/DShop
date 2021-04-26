import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUserProfile } from '../actions/userActions';

const ProfileScreen = ({ location, history }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState(null);

    const dispatch = useDispatch();

    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const userUpdateProfile = useSelector(state => state.userUpdateProfile);
    const { success } = userUpdateProfile;

    useEffect(() => {
        if(!userInfo) {
            history.push(`/login`);
        } else {
            if (!user.name) {
                dispatch(getUserDetails('profile'));
            } else {
                setName(user.name);
                setEmail(user.email);
            }
        }
    }, [dispatch, history, userInfo, user]);

    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Пароль не совпадает!');
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }));
        }
    }

    return (
        <FormContainer>
            <div className="title">Профиль</div>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {success && <Message variant='success'>Профиль Обновлен</Message>}
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
                    Обновить
                </button>
            </form>

            <div>
                <div className="title">Мои заказы</div>
            </div>
        </FormContainer>
    )
}

export default ProfileScreen;
