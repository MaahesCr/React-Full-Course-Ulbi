import React from 'react'
import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

export default function AppRouter() {
  const {isAuth, isLoading} = useContext(AuthContext);
  console.log(isAuth)

  if (isLoading) {
    <Loader></Loader>
  } 

  return (
    isAuth
      ?  <Routes>
          {privateRoutes.map(route => 
            <Route element={route.element} path={route.path} exact={route.exact} key={route.path}/>
          )}
        </Routes>
      :<Routes>
        {publicRoutes.map(route => 
          <Route element={route.element} path={route.path} exact={route.exact} key={route.path}/>
        )}
      </Routes>
  )
}
