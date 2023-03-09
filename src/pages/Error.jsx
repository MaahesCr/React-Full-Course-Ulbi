import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
        <h1>Страницы не существует!</h1>
        <Link to='/posts'>Вернуться на главную</Link>
    </div>
  )
}
