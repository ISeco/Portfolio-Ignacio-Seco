import React, { useEffect } from 'react';
import { Home } from '../pages/Home';
import {
    Routes,
    Route,
    useNavigate,
  } from "react-router-dom";

export const AppRouter = () => {

  const navegate = useNavigate();

  useEffect(() => {
    navegate('/home');
  }, [])

  return (
    <div>
      <Routes>
        <Route path='/home' element={ <Home /> }/>
      </Routes>
    </div>
  )
}
