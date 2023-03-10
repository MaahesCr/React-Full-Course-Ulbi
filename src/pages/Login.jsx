import React from 'react'
import MyBtn from '../components/UI/Btns/MyBtn'
import MyInp from '../components/UI/Input/MyInp'

export default function Login() {
  return (
    <div>
        <h1>Форма для логина</h1>
        <MyInp type="text" placeholder='Введите логин' />
        <MyInp type="password" placeholder='Введите пароль' />
        <MyBtn>Войти</MyBtn>
    </div>
  )
}
