import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
  <>
  <div className="w-full md:w-1/6 mt-28 bg-gray-200 min-h-screen overflow-y-auto shadow-md ">
          {/* Sidebar content */}
          <h2 className="text-lg text-center uppercase font-semibold text-gray-800 mt-12 ml-4 overflow-ellipsis">Categories</h2>
          <ul className="mt-2 ml-4 text-justify uppercase ">
          <li>
              <Link to="/FamilyCategory" className="text-gray-700 block py-2 px-4 hover:bg-gray-300 hover:text-gray-900">Family Lawyers</Link>
            </li>
            <li>
              <Link to="/IntellectualPropertyCategory" className="text-gray-700 block py-2 px-4 hover:bg-gray-300 hover:text-gray-900">IntellectualProperty Lawyers</Link>
            </li>
            <li>
              <Link to="/CivilCategory" className="text-gray-700 block py-2 px-4 hover:bg-gray-300 hover:text-gray-900">Civil Lawyers</Link>
            </li>
            <li>
              <Link to="/CorporateCategory" className="text-gray-700 block py-2 px-4 hover:bg-gray-300 hover:text-gray-900">Corporate Lawyers</Link>
            </li>
            <li>
              <Link to="/CriminalCategory" className="text-gray-700 block py-2 px-4 hover:bg-gray-300 hover:text-gray-900">Criminal Lawyers</Link>
            </li>
           <li>
              <Link to="/Labor&employmentCategory" className="text-gray-700 block py-2 px-4 hover:bg-gray-300 hover:text-gray-900">LABOR & EMPLOYEMENT Lawyers</Link>
            </li>
            <li>
              <Link to="/RealEstateCategory" className="text-gray-700 block py-2 px-4 hover:bg-gray-300 hover:text-gray-900">REAL ESTATE Lawyers</Link>
            </li>
            <li>
              <Link to="/TaxCategory" className="text-gray-700 block py-2 px-4 hover:bg-gray-300 hover:text-gray-900">Tax Lawyers</Link>
            </li>
            {/* Add more categories as needed */}
          </ul>
        </div>
  </>
  )
}

export default Sidebar