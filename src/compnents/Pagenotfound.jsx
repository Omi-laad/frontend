// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaExclamationTriangle } from 'react-icons/fa';
// import Logo2 from '../img/Logo.png';

// const Pagenotfound = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex  items-center justify-center space-y-20">
//       <div className="grid place-items-center  items-center justify-center text-center">
//   <img src={Logo2} alt="logo" className='h-28 '/>
//  <div className="grid-row">
//  <FaExclamationTriangle className=' text-yellow-400 h-28'/>
//  <p className=" ml-4 h-28">404 Page Not Found!</p>
//   </div>     {/* <img src={Logo2} alt="Logo" className="h-28  items-center justify-center rounded border-white border-2" /> */}
//         <p className="text-lg text-gray-700 mb-4">Oops! The page you are looking for could not be found.</p>
//         <Link to="/Home" className="text-blue-500 hover:underline">Go to Home Page</Link>
//       </div>
//     </div>
//   );
// };

// export default Pagenotfound;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import Logo2 from '../img/Logo.png';

const Pagenotfound = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <img src={Logo2} alt="logo" className='h-28 mb-8 shadow-md rounded'/>
      <div className="flex flex-col items-center justify-center text-center">
        <FaExclamationTriangle className='text-yellow-400 h-20 w-20 mb-2'/>
        <p className="text-2xl text-gray-900 font-bold mb-4">404 Page Not Found!</p>
        <p className="text-lg text-gray-700 mb-8">Oops! The page you are looking for could not be found.</p>
        <Link to="/Home" className="text-blue-500 hover:underline">Go to Home Page</Link>
      </div>
    </div>
  );
};

export default Pagenotfound;

