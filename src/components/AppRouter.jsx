import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router';

export default function AppRouter() {
  const isAuth = true; 
  return (
    isAuth
      ?  <Routes>
          {privateRoutes.map(route => 
            <Route element={route.element} path={route.path} exact={route.exact}/>
          )}
        </Routes>
      :<Routes>
        {publicRoutes.map(route => 
          <Route element={route.element} path={route.path} exact={route.exact}/>
        )}
      </Routes>
  )
}
