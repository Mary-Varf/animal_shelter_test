import React, {useState, useEffect} from "react";
import { auth, getTodayData } from '../api'
import { useDispatch } from 'react-redux';
import { toggleLoginError, toggleLoginReady} from '../actions'

export const LoginForm = (data) => {
  const { loginError, loginReady } = data.state;
  const [login, setLogin] = useState('test_user_1')
  const [password, setPassword] = useState('user10000')
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setLogin(e.target.value)
  }

  const handleSendForm = (e) => {
    e.preventDefault()
    if (login.length > 0 || password.length > 0) {
      auth(login, password)
        .then((response) => {
          localStorage.setItem('access', response.data.access);
          window.location.assign('/today');
        })
        .catch((error) => {
              dispatch(toggleLoginError(true));
              console.log('Имя пользователя или пароль введены не верно')
            }
        );
    }
  }
  useEffect(() => {
    if (!loginReady) {
      dispatch(toggleLoginError(true));
    } else {
      dispatch(toggleLoginReady(false));
    }
  }, [loginError])
  
//   username: 'test_user_1',
// password: 'user10000'

  return (
    <div className="container w-500 ">
      <h3 className='center-align'>Авторизация</h3>
      <form className="s12" action='post'>
        <div className="row">
          <div className="input-field col w-500">
            <input 
              type="text"
              placeholder='Login'
              id='login'
              onChange={handleChange}
              value='test_user_1'
            />
          </div>
        </div>
        <div className="row">
          <div className="input-field col w-500">
            <input 
              id="password"
              type="password"
              data-length="30"
              value='user10000'
              placeholder='Password'
              onChange={e => {
                setPassword(e.target.value)
                dispatch(toggleLoginError(false))
              }}
            />
          </div>
        </div>
        <div className='center-align'>
          {loginError ? <p className='red-text'>Имя пользователя или пароль введены не верно</p> : ''}
        <button className="waves-effect waves-light btn red lighten-1 " onClick={handleSendForm}>Войти</button>

        </div>
      </form>
    </div>      
  );
}