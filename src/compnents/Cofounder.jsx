// import React from 'react';
// import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

// function CoFounder({ name, imageSrc, description, linkedinLink, twitterLink, instagramLink, githubLink }) {
//   return (
//     <div className=" w-full md:w-1/2  lg:w-1/4 mt-18 mb-4  bg-white shadow-md p-8">
//       <img src= {imageSrc} alt={name} className=" mx-auto h-32 w-32 itemsalign-center mb-4 rounded-full object-cover shadow-xl" />
//       <h2 className="text-xl font-semibold mb-2">{name}</h2>
//       <p className="text-gray-700 ">{description}</p>
//       <div className="mt-4">
//         <a href={linkedinLink} target="_blank"><FaLinkedin className=" hover:text-blue-600 inline-block w-8 h-8 mr-2" /></a>
//         <a href={twitterLink} target="_blank"><FaTwitter className=" hover:text-blue-600 inline-block w-8 h-8 mr-2" /></a>
//         <a href={instagramLink} target="_blank"><FaInstagram className="hover:text-gray-600  text-pink inline-block w-8 h-8 mr-2 " /></a>
//         <a href={githubLink} target="_blank"><FaGithub className="hover:text-gray-600 inline-block w-8 h-8 mr-2"/></a>
//       </div>
//     </div>
//   );
// }

// export default CoFounder;


import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function CoFounder({ name, imageSrc, description, linkedinLink, twitterLink, instagramLink, githubLink }) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 mt-18 mb-4 bg-white shadow-md p-8">
      <img src={imageSrc} alt={name} className="mx-auto h-32 w-32 itemsalign-center mb-4 rounded-full object-cover shadow-xl" />
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700">{description}</p>
      <div className="mt-4 flex flex-col">
        <div className="flex items-center mb-2">
          <a href={linkedinLink} target="_blank" className="mr-4"><FaLinkedin className="hover:text-blue-600 inline-block w-8 h-8" /></a>
          <a href={twitterLink} target="_blank" className="mr-4"><FaTwitter className="hover:text-blue-600 inline-block w-8 h-8" /></a>
        
          <a href={instagramLink} target="_blank" className="mr-4"><FaInstagram className="hover:text-pink-600 inline-block w-8 h-8" /></a>
          <a href={githubLink} target="_blank"><FaGithub className="hover:text-gray-600 inline-block w-8 h-8" /></a>
        </div>
      </div>
    </div>
  );
}

export default CoFounder;
