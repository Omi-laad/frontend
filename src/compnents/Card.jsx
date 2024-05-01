// import React, { useState } from 'react';
// import lawyer from '../img/lawyer.png';
// import Modal from './Modal';

// function Card() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const lawyerDetails = {
//     name: 'John Doe',
//     age: 35,
//     phoneNumber: '+1234567890',
//     email: 'john@example.com',
//     totalCasesWon: 50,
//     totalCasesFought: 100,
//     court: 'High Court',
//   };

//   const handleVisitProfile = () => {
//     setIsModalOpen(true);
//   };

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <div className="relative h-80 group overflow-hidden border-2">
//         <img
//           src={lawyer}
//           alt="Lawyer"
//           className="z-0 h-full w-full rounded-md object-cover transition-transform duration-300 transform group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
//         <div className="absolute bottom-4 left-4 text-left">
//           <h1 className="text-lg font-semibold text-white">Lawyer</h1>
//           <p className="mt-2 text-sm text-white">
//             Working in high court since 2015   Working in high court since 2015   Working in high court since 2015   Working in high court since 2015   Working in high court since 2015   Working in high court since 2015 
//           </p>
//           <button onClick={handleVisitProfile} className="hover:bg-gray-800 grow   rounded-md mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
//             Profile &rarr;
//           </button>
//         </div>
//       </div>
//       <Modal isOpen={isModalOpen} onClose={handleCloseModal} lawyer={lawyerDetails} />
//     </>
//   );
// }

// export default Card;

import {React,useState} from 'react';
import Modal from './Modal';
import DefaultLawyer from '../img/Lawyer.png';
import femalelawyer1 from'../Lawyers/Femalelawyers/femalelawyer1.jpg';

function Card({ lawyer }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVisitProfile = () => {
         setIsModalOpen(true);
       };
    
       const handleCloseModal = () => {
         setIsModalOpen(false);
       };
    
  return (
    <div className="relative h-80 w-70 group overflow-hidden border-2">
      <img
        src={lawyer.image || DefaultLawyer } // Assuming each lawyer object has an image property
        alt="Lawyer"
        className="z-0 h-full w-full rounded-md object-cover transition-transform duration-300 transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">Adv.{lawyer.name}</h1>
        <p className="mt-2 text-sm text-white">
        Specialization in: {lawyer.type} Law
         <br/>
        Practising in:{lawyer.courtOfPractice}
        <br/>
        Attorney Verification Status:{lawyer.AttorneyVerificationStatus}
        <br/>
        Description:{lawyer.description} {/* Assuming each lawyer object has a description property */}
        </p>
        <button  onClick={handleVisitProfile} className="hover:bg-gray-800 grow rounded-md mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          Profile &rarr;
        </button>
      </div>
       <Modal isOpen={isModalOpen} onClose={handleCloseModal} lawyer={lawyer} />

    </div>
  );
}

export default Card;
