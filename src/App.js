

// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Chatbot from './pages/page1/Chatbot';
import Lawyer from './pages/page2/Lawyer';
import ContactUs from './pages/fpage/ContactUs';
import Pagenotfound from './compnents/Pagenotfound';
import Cards from './pages/page3/Cards';
import AboutUs from './pages/fpage/AboutUs';
import PrivacyPolicy from './pages/fpage/PrivacyPolicy';
import {ToastContainer,} from 'react-toastify' 
import Login from './pages/Auth/Login';
import ResetPasswordPage from './pages/Auth/ResetPasswordPage';
import  CardOne  from './pages/page2/CardOne';
import Category2 from './pages/page2/Category2';
import Category3 from './pages/page2/Category3';
import Signup from './pages/Auth/Signin';
import NewsRef from './pages/page3/NewsRef';
import Mailarticle from './pages/page3/Mailarticle';
import Category4 from './pages/page2/Category4';
import Category5 from './pages/page2/Category5';
import Category6 from './pages/page2/Category6';
import Category7 from './pages/page2/Category7';
import Category8 from './pages/page2/Category8';
import Registerlawyer from './pages/page2/Registerlawyer';
import ResetPasswordconfirm from './pages/Auth/ResetPasswordconfirm';
import ActivatePage from './pages/Auth/Activate';
import Alert from './compnents/Alert';
import Private from './utils/PrivateRoutes';
import Future from '../src/Future';
const App = () => {
  // const [showAlert, setShowAlert] = useState(true); // State to control the visibility of the alert

  //    const handleAgree = () => {
  //      setShowAlert(false); // Function to handle user's agreement to the terms
  //    };
  
  return (

    <>
    {/* <Routes>
    <Route path ="/Login" element={<Login/>}/>
    <Route path ="/ResetPassword" element={<ResetPasswordPage />}/>
    <Route path ="/Signin" element={<Signin/>}/>     
     <Route path="*" element={<Pagenotfound />} />
    </Routes>
   */}
  
     <Routes>
    <Route path ="/Login" element={<Login/>}/>
    <Route path ="/ResetPassword" element={<ResetPasswordPage />}/>
    <Route path ="/ResetPasswordconfirm" element={<ResetPasswordconfirm/>}/>
    <Route path ="/Signup" element={<Signup/>}/>   
    <Route path='/' element={<Private/>}>
     
    <Route path="/" element={<Layout />}>
    <Route path="Home" element={<Home />} />
    <Route path="chatbot" element={<Chatbot />} />
    <Route path="lawyer" element={<Lawyer />} />
    <Route path="CriminalCategory" element={<CardOne/>}/>
    <Route path="CorporateCategory" element={<Category2/>}/>
    <Route path="CivilCategory" element={<Category3/>}/>
    <Route path="FamilyCategory" element={<Category4/>}/>
    <Route path="IntellectualPropertyCategory" element={<Category5/>}/>
    <Route path="Labor&EmploymentCategory" element={<Category6/>}/>
    <Route path="RealEstateCategory" element={<Category7 />}/>
    <Route path="TaxCategory" element={<Category8/>}/>   
    <Route path="Whatsnew" element={<Cards />} />
    <Route path="AboutUs" element={<AboutUs />} />
    <Route path="ContactUs" element={<ContactUs />} />
    <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
    </Route>  
    </Route>
    <Route path="/FutureScope" element={<Future/>}/>
    <Route path="*" element={<Pagenotfound />} />
    <Route path="/activate/:uid/:token" element={<ActivatePage/>}/>
    <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordconfirm/>}/>
    <Route path="/news/:title" element={<NewsRef/>}/>
    <Route path="/Mailarticle" element={<Mailarticle />} />
    <Route path="/Registerlawyer" element={<Registerlawyer />} />
    <Route path="/Alert" element={<Alert/>}/>
    </Routes>
     {/* <Chatbot/> */}
    <ToastContainer />
    </>
    // <Routes>
    //   <Route path="/" element={<Layout />}>
    //     <Route path='Signin' element={<Signin/>}/>
    //     {/* <Route path="Home" element={<Home />} />
    //     <Route path="chatbot" element={<Chatbot />} />
    //     <Route path="lawyer" element={<Lawyer />} />
    //     <Route path="Whatsnew" element={<Cards />} />
    //     <Route path="AboutUs" element={<AboutUs />} />
    //     <Route path="ContactUs" element={<ContactUs />} />
    //     <Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
    //     <Route path="*" element={<Pagenotfound />} /> */}
    //   </Route>
    // </Routes>
  );
}

export default App;

// import './App.css';
// import React, { useEffect,useState } from 'react';
// import Navbar from './compnents/Navbar';
// import Footer from './compnents/Footer';
// import Home from './pages/Home';
// import Chatbot from './pages/page1/Chatbot';
// import Alert from './compnents/Alert';
// import Lawyer from './pages/page2/Lawyer';
// //import Whatsnew from './pages/media/Whatsnew';

// const App = () => {
//   const [showAlert, setShowAlert] = useState(true); // State to control the visibility of the alert

//   const handleAgree = () => {
//     setShowAlert(false); // Function to handle user's agreement to the terms
//   };

//   return (
//     // <div>
//     //   {showAlert && <Alert onAgree={handleAgree} />} {/* Render the alert if showAlert is true */}
//     //    <Navbar />
//     //   <Home />
//     //   <Footer /> 
//     // </div>
//     <>
//     </>
//   );
// };

// export default App;





//  <Routes>
{/* <Route path="/" element={<Layout />}>
<Route path="Home" element={<Home />} />
<Route path="chatbot" element={<Chatbot />} />
<Route path="lawyer" element={<Lawyer />} />
<Route path="Whatsnew" element={<Cards />} />
<Route path="AboutUs" element={<AboutUs />} />
<Route path="ContactUs" element={<ContactUs />} />
<Route path="PrivacyPolicy" element={<PrivacyPolicy />} />
<Route path="*" element={<Pagenotfound />} />
</Route>
</Routes>
 
<ToastContainer /> */}
