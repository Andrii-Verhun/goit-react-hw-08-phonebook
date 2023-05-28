import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import { refreshUser } from 'redux/auth/operations';

import { Navigate, Route, Routes } from 'react-router-dom';

import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Contacts } from 'pages/Contacts/Contacts';
import { Register } from 'pages/Register/Register';
import { LogIn } from 'pages/LogIn/LogIn';
import { Layout } from './Layout/Layout';
import { HomePage } from 'pages/HomePage/HomePage';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />

        <Route
          path='register'
          element={<RestrictedRoute redirectTo={'/contacts'} component={<Register />} />} />
        
        <Route
          path='login'
          element={<RestrictedRoute redirectTo={'/contacts'} component={<LogIn />} />} />
        
        <Route
          path='contacts'
          element={<PrivateRoute redirectTo='/login' component={<Contacts />} />} />
      </Route>
      <Route path='*' element={<Navigate to="/" replace />} />
    </Routes>
    );
}