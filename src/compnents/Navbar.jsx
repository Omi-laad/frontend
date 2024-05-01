// Navbar.jsx

import React, { useEffect, useState } from 'react';
import { NavLink ,Link,useNavigate } from 'react-router-dom';
import { FaHome, FaUserCircle, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import Logo from '../img/Logo.png';
import Logo2 from '../img/Logo2.png';
import Chatbot from '../pages/page1/Chatbot';
import Home from '../pages/Home';
import axios from 'axios';

const Navbar = () => {
 
  const [user,setUser]=useState({})

  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling behavior if supported by the browser
    });
  
};
const handlesignout =()=>{
  localStorage.clear()
  navigate('/login')

  // window.location.href('/login')

}
 const getuser= async(e)=>{
  const response = await axios.get('http://127.0.0.1:8000/api/v1/auth/users/me/',{
    headers:{
      "Authorization" : `Bearer ${localStorage.getItem('token')}`
    }
  })

  if(response.status === 200){
    setUser(response.data)
  }
 }

 useEffect(()=>
 {
  getuser();
 },[])

 useEffect(()=>{
  console.log('user',user)
 },[user])

  return (
    <nav className="bg-orange-500 py-4 md:py-6 fixed top-0 left-0 w-full z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-0">
        <div className="flex items-center  space-x-4 mb-2 md:mb-0">
          <img src={Logo} alt="Logo" className="h-14 md:h-16 w-12 md:w-20  rounded   border-white border-2" />
          <h1 className="text-white text-lg  md:ml-2 font-semibold italic ">न्याय Saarthi</h1> 
        </div>
        <div className="flex justify-center flex-grow space-x-8">
          <NavLink to="Home" onClick={scrollToTop} className="text-white hover:text-gray-200" activeClassName="text-gray-200">
            <FaHome size={24} />
          </NavLink>
          <NavLink to="Lawyer" onClick={scrollToTop} className="text-white hover:text-gray-200" activeClassName="text-gray-200">
            Search Lawyer
          </NavLink>
          <NavLink to="Whatsnew"  onClick={scrollToTop} className="text-white hover:text-gray-200" activeClassName="text-gray-200">
            Whats New?
          </NavLink>
          <NavLink to="FutureScope" onClick={scrollToTop}  target="_blank" rel='noopener noreferer' className="text-white hover:text-gray-200" activeClassName="text-gray-200">
          Upcoming Enhancements
          </NavLink>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-white text-sm mb-2 md:mb-0">Welcome, <span className="font-semibold">{user?.first_name} {user?.last_name}</span></p>
          <button className="text-white hover:text-gray-200 profile-icon p-2 md:p-4">
            <FaUserCircle size={24} />
          </button>
          {/* <Link to="Signin" className="text-white hover:text-gray-200">
            <FaSignInAlt size={24}  />
            </Link>  */}
          <div  onClick={handlesignout} className="text-white hover:text-gray-200">
            <FaSignOutAlt size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
