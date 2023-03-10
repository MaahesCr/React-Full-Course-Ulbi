import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import MyBtn from '../Btns/MyBtn';
import { AuthContext } from '../../../context';

export default function Navbar() {
  const {isAuth, setIsAuth} = useContext(AuthContext)

  const logout = () => {
    setIsAuth(false)
    localStorage.removeItem('auth')
  }
  return (
    <div className='navbar'>
        <MyBtn onClick={logout}>
          Выйти
        </MyBtn>
        <div className='navbar__links'>
            <Link to='/about'>About</Link>
            <Link to='/posts'>Posts</Link>
        </div>
    </div>
  )
}
