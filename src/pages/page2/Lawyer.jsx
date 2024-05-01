import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../compnents/Sidebar';

function Cards() {

  return (
    <div>
      {/* Main content */}
      <div className="flex">
       <Sidebar/>
        <div className="flex items-center justify-center pb-44 w-full md:w-3/4">
          <div className="w-full md:w-1/2 mt-28 bg-white shadow-md p-8">
            <h2 className="text-xl font-semibold mb-4">Search Lawyer</h2>
            <p className="text-gray-700 ">
            Welcome to our platform, your gateway to legal expertise. Browse seamlessly categorized lawyers to find the right fit for your needs. Whether it's civil, criminal, or corporate law, we connect you to professionals efficiently. Trust our curated directory for precise, tailored legal assistance. Start your search today for expert guidance.
              </p>
            <Link to="/Registerlawyer" target="_blank" rel="noopener noreferrer">
            <div className="shadow-md rounded-md overflow-auto mt-6 whitespace-nowrap cursor-pointer text-red-500 italic">
              <marquee behavior="scroll" direction="left" scrollamount="8">
                If you are a lawyer and want to register yourself on our website click here
              </marquee>
            </div>
          </Link>
          </div>
        </div>
        {/* Main content */}
      </div>
    </div>
  );
}

export default Cards;
