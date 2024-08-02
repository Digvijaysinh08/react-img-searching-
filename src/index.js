import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Pricing from './components/Pricing';
import Features from './components/Features';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Images from './components/Images';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/features' element={<Features />} />
      <Route path='/images' element={<Images />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/contact' element={<Contact />} />
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}/>
  </React.StrictMode>
);



// https://api.unsplash.com/photos?page=1

// acces 7GpqrgCsZYXoAXCi4eLDxelFTw4oMtjiur3e10B_lAk
// secret BFnYQ7T6DRs43iGS18RGGQmZOMS8dsSu4EZzKA4XVzU
