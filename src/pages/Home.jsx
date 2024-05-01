// // import React from 'react';

// // const Home = () => {
// //   return (
// //     <div className="bg-gray-100 min-h-screen flex items-center justify-center">
// //       <div className="max-w-6xl mx-auto px-4 py-8 text-center">
// //         <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to our Website</h1>
// //         <p className="text-lg text-gray-700">
// //           This is a simple home page. Content in process....
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Home;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import Lawyer from '../pages/page2/Lawyer';
// const Home = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//       <div className="max-w-6xl mx-auto px-4 py-8 text-center">
//         <h1 className="text-4xl font-semibold text-gray-800 mb-4">Welcome to Nyay Saarthi</h1>
//         <p className="text-lg text-gray-700 mb-8">
//           Your trusted destination for legal assistance, advice, and news updates.
//         </p>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Featured Services */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured Services</h2>
//             <ul className="text-lg text-gray-700">
//               <li>Connect with experienced lawyers</li>
//               <li>Get personalized legal advice</li>
//               <li>Stay informed with legal news updates</li>
//             </ul>
//           </div>
          
//           {/* Lawyer Search */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Find a Lawyer</h2>
//             <form className="flex flex-col">
//               <p className="text-lg text-gray-700">Find a suitable lawyer as per your issue with most experince</p>
//               {/* <input type="text" placeholder="Enter keywords or location" className="border border-gray-300 rounded-md px-4 py-2 mb-2" /> */}
//               <Link to="/lawyer" type="submit" className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300" >Search</Link>
//             </form>
//           </div>
          
//           {/* Legal News Feed */}
//           <div className="bg-white rounded-lg shadow-md p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Legal News Feed</h2>
//             <div className="text-lg text-gray-700">
//               <p>Stay updated with the latest legal news and insights.</p>
//               <a href="#" className="text-blue-500 hover:underline">Read more</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import omkar from '../omkar.png';
import siddhi from '../siddhi.jpg';
import aarchy from '../aarchy.jpg';
import meenakshi from '../meenakshi.jpg';


const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
    
    {/* Welcome message and content */}
    <div className="max-w-6xl mx-auto px-4 pt-40 text-center">
      <h1 className="text-2xl font-semibold text-gray-800 mx-4 text-nowrap">Welcome to Nyay Saarthi</h1>
      <p className="text-lg text-gray-700 mb-8">
        Your trusted destination for legal assistance, advice, and news updates.
      </p>
  
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Featured Services */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Featured Services</h2>
          <ul className="text-base text-gray-700 text-nowrap">
            <li>Connect with experienced lawyers</li>
            <li>Get personalized legal advice</li>
            <li>Stay informed with legal news updates</li>
          </ul>
        </div>
  
        {/* Lawyer Search */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Find a Lawyer</h2>
          <form className="flex flex-col">
            <p className="text-lg text-gray-700">Find a suitable lawyer as per your issue with most experience</p>
            <Link to="/lawyer" className="bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 mt-4">Search</Link>
          </form>
        </div>
  
        {/* Legal News Feed */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Legal News Feed</h2>
          <div className="text-lg text-gray-700">
            <p>Stay updated with the latest legal news and insights.</p>
            <Link to="/whatsnew" className="text-blue-500 hover:underline">Read more</Link>
          </div>
        </div>
      </div>
    </div>
  
    {/* Contextual Quotes */}
    <div className="max-w-6xl mx-auto px-4 py-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Quotes in which we believe</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Add your quotes here */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-lg text-gray-700">"Justice delayed is justice denied."</p>
          <p className="text-sm text-gray-500 mt-2">- William E. Gladstone</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-lg text-gray-700">"The execution of the laws is more important than the making of them."</p>
        <p className="text-sm text-gray-500 mt-2">- Thomas Jefferson</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-lg text-gray-700">"Injustice anywhere is a threat to justice everywhere."</p>
          <p className="text-sm text-gray-500 mt-2">- Martin Luther King Jr.</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-lg text-gray-700">"I would rather be exposed to the inconveniences attending too much liberty than to those attending too small a degree of it."</p>
        <p className="text-sm text-gray-500 mt-2">- Thomas Jefferson</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
        <p className="text-lg text-gray-700">"Justice will not be served until those who are unaffected are as outraged as those who are."</p>
        <p className="text-sm text-gray-500 mt-2">- Benjamin Franklin</p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <p className="text-lg text-gray-700">"They who can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety."</p>
        <p className="text-sm text-gray-500 mt-2">- Benjamin Franklin</p>
        </div>  
            </div>
  </div>
  </div>
    );
};

export default Home;
