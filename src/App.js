import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NotFound } from './pages/NotFound';

import './App.css';
import './scss/app.scss';

export const App = () => {
  const pathname = window.location.pathname;
  console.log(pathname);
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          {/* {pathname === '/' && <Home />} */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
