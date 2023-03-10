import React from 'react'
import MyBtn from '../components/UI/Btns/MyBtn'
import MyInp from '../components/UI/Input/MyInp'
import { AuthContext } from '../context';
import { useContext } from 'react';

export default function Login() {
  const {setIsAuth} = useContext(AuthContext);

  const login = event => {
    event.preventDefault();
    setIsAuth(true)
    localStorage.setItem('auth', 'true');
  }

  return (
    <div>
        <h1>Форма для логина</h1>
        <form onSubmit={login}>
            <MyInp type="text" placeholder='Введите логин' />
            <MyInp type="password" placeholder='Введите пароль' />
            <MyBtn>Войти</MyBtn>
        </form>
    </div>
  )
}
