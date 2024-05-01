import {React, useEffect,useState} from 'react';
import {Outlet} from 'react-router-dom';
import Navbar from './compnents/Navbar';
import Footer from './compnents/Footer';
import Alert from './compnents/Alert';
import {Toaster} from 'react-hot-toast';
import Chatbot from './pages/page1/Chatbot';
function Layout() {
    
  return (
        <>
        
        <Navbar/>
        <Outlet/>
        <Chatbot/>
        <Footer/>
        <Toaster  position="top-right"/>
        </>

    )
}

export default Layout