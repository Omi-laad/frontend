// // import React from 'react';
// import { FaTimes } from 'react-icons/fa';
// import {Link} from 'react-router-dom'
// function Modal({ isOpen, onClose, lawyer }) {
//   if (!isOpen) return null;

//   const handleEmailClick = () => {
//     // Logic for handling email Link click
//     // You can implement functionality to open a mail client or trigger some action
//   };

//   const handleInquiryClick = () => {
//     // Logic for handling inquiry Link click
//     // You can implement functionality to open a form or trigger some action
//   };

//   return (
//     <div className="fixed inset-0 flex items-center justify-center z-50 ">
//       <div className="relative bg-white p-16 rounded-md shadow-lg">
//         <Link onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-500  hover:cursor-pointer">
//         {/* hover:text-gray-700  */}
//           <FaTimes className="w-6 h-6" />
//         </Link>
//         <h2 className="text-2xl font-semibold text-gray-800">{lawyer.name}</h2>
//         <p className="text-base font-semibold text-gray-600 mb-4">
//           Age: {lawyer.age}<br />
//           Phone Number: {lawyer.phoneNumber}<br />
//           Email: {lawyer.email}<br />
//           Total Cases Won: {lawyer.totalCasesWon}<br />
//           Total Cases Fought: {lawyer.totalCasesFought}<br />
//           Court: {lawyer.court}
//         </p>
//         <div className="flex justify-between">
//           <Link onClick={handleEmailClick} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mr-2">Email</Link>
//           <Link onClick={handleInquiryClick} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Appointment</Link>
//         </div>
//       </div>
//       <div onClick={onClose} className="fixed inset-0 bg-black opacity-25"></div>
//     </div>
//   );
// }

// export default Modal;



// /////
// import React from 'react';
// import { FaTimes } from 'react-icons/fa';

// function Modal({ isOpen, onClose, lawyer }) {
//   if (!isOpen) return null;

//   const handleEmailClick = () => {
//     // Logic for handling email Link click
//     // You can implement functionality to open a mail client or trigger some action
//   };

//   const handleInquiryClick = () => {
//     // Logic for handling inquiry Link click
//     // You can implement functionality to open a form or trigger some action
//   };

//   return (
//     <div className="fixed  inset-0 flex items-center justify-center z-50">
//       <div className="relative bg-white p-16 rounded-md ">
//         <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-500  hover:cursor-pointer">
//           <FaTimes className="w-6 h-6" />
//         </button>
//         <h2 className="text-2xl font-semibold text-gray-800">Adv.{lawyer.name}</h2>
//         <p className="text-base font-semibold text-gray-600 mb-4">
//           Age: {lawyer.age}<br />
//           {/* Email: {lawyer.email}<br /> */}
//           Type:{lawyer.type} <br/>
//           Description:{lawyer.description}<br/> {/* Assuming each lawyer object has a description property */}
//           Total Cases Won: {lawyer.casesWon}<br />
//           Total Cases Fought: {lawyer.casesFought}<br />
//           Years in Practice:{lawyer.yearsInPractising}
//         </p>
//         <div className="flex justify-between">
//           <button onClick={handleEmailClick} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 mr-2">Email</button>
//           <button onClick={handleInquiryClick} className="bg-orange-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600">Appointment</button>
//         </div>
//       </div>
//       <div onClick={onClose} className="fixed inset-0 bg-black opacity-25"></div>
//     </div>
//   );
// }

// export default Modal;


////////////////////////////////////////////////////////////



import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Modal({ isOpen, onClose, lawyer }) {
  if (!isOpen) return null;

  const handleEmailClick = () => {
    // Construct the mailto link with the lawyer's email address
    const mailtoLink = `mailto:${lawyer.email}`;
  
    // Create a temporary link element
    const tempLink = document.createElement('a');
    tempLink.href = mailtoLink;
    tempLink.target = '_blank'; // Open in a new tab if possible
  
    // Programmatically click the link to open the default mail client
    tempLink.click();
  };
  
  

  const handleInquiryClick = () => {
    // Logic for handling inquiry Link click
    // You can implement functionality to open a form or trigger some action
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative bg-white rounded-lg shadow-md w-full md:w-2/3 lg:w-1/2 xl:w-1/3 p-8">
        <button onClick={onClose} className="absolute top-0 right-0 m-4 text-gray-500  hover:cursor-pointer">
          <FaTimes className="w-6 h-6" />
        </button>
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Adv. {lawyer.name}</h2>
        <p className="text-lg font-semibold text-gray-600 mb-6">
          Age: {lawyer.age}<br />
          Type: {lawyer.type}<br />
          <p>
  Attorney Verification Status:
  <span className={lawyer.AttorneyVerificationStatus === 'Verified' ? 'text-green-400' : 'text-red-400'}>
    {lawyer.AttorneyVerificationStatus}
  </span>
  <br/>
</p>

          Description: {lawyer.description}<br />
          Total Cases Won: {lawyer.casesWon}<br />
          Total Cases Fought: {lawyer.casesFought}<br />
          Years in Practice: {lawyer.yearsInPractising}
        </p>
        <div className="flex justify-center">
          <Link onClick={handleEmailClick} className="bg-orange-500 text-white font-semibold  cursor-pointer py-2 px-6 rounded hover:bg-orange-600 mr-2">Email</Link>
          {/* <button onClick={handleInquiryClick} className="bg-orange-500 text-white font-semibold py-2 px-6 rounded hover:bg-orange-600">Appointment</button> */}
        </div>
      </div>
      {/* <div onClick={onClose} className="fixed inset-0 bg-black opacity-25"></div> */}
    </div>
  );
}

export default Modal;
