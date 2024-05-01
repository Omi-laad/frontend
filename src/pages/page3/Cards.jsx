// import React from 'react';
// import Sidebar from '../../compnents/Sidebar';
// import NewsRef from './NewsRef';
// import VideosRef from './Videos.Ref';

// function WhatsNew() {
//   // Dummy data for news articles
//   const newsArticles = [
//     {
//       id: 1,
//       title: "Supreme Court Rules on Landmark Case",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
//       date: "March 25, 2024"
//     },
//     {
//       id: 2,
//       title: "New Legislation Introduced to Address Cybersecurity Concerns",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
//       date: "March 24, 2024"
//     },
//     // Add more news articles as needed
//   ];

//   // Function to handle smooth scrolling
//   const scrollToRef = (ref) => {
//     window.scrollTo({
//       top: ref.current.offsetTop - 100, // Adjust the offset as needed
//       behavior: "smooth"
//     });
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row">
//       <Sidebar />
//       <div className="flex-1 max-w-6xl mx-auto px-4 py-8 md:pl-64"> {/* Adjusted padding-left for Sidebar */}
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4">Legal News Updates</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Render news articles */}
//           {newsArticles.map(article => (
//             <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
//               <p className="text-sm text-gray-500 mb-2">{article.date}</p>
//               <p className="text-base text-gray-700">{article.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* News and Videos sections with smooth scrolling */}
//       <div className="fixed top-0 left-0 right-0 bg-orange-500 py-4 md:py-6 z-10 flex justify-around">
//         <a href="#news" className="text-white font-semibold hover:underline cursor-pointer" onClick={() => scrollToRef(NewsRef)}>News</a>
//         <a href="#videos" className="text-white font-semibold hover:underline cursor-pointer" onClick={() => scrollToRef(VideosRef)}>Videos</a>
//       </div>
//     </div>
//   );
// }

// export default WhatsNew;
// import React from 'react';
// import Sidebar from '../../compnents/Sidebar';

// function WhatsNew() {
//   // Dummy data for news articles
//   const newsArticles = [
//     {
//       id: 1,
//       title: "Supreme Court Rules on Landmark Case",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
//       date: "March 25, 2024"
//     },
//     
//   // Add more news articles as needed
//   ];

//   return (
//     <div className="bg-gray-100 min-h-screen flex">
//       <div className="flex-1  max-w-6xl   py-40 md:pl-64"> {/* Adjusted padding-left for Sidebar */}
//       <marquee className="text-3xl font-semibold text-gray-800 mb-4 text-center uppercase">The videos section is currently in the works. We appreciate your patience as we finalize its implementation.</marquee>
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Legal News Updates</h1>
//         <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Render news articles */}
//           {newsArticles.map(article => (
//             <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
//               <p className="text-sm text-gray-500 mb-2">{article.date}</p>
//               <p className="text-base text-gray-700">{article.content}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhatsNew;



// import React, { useState } from 'react';
// import Sidebar from '../../compnents/Sidebar';
// function WhatsNew() {
//   // Dummy data for news articles
//   const newsArticles = [
//     // Dummy data goes here...
//     {
//       id: 1,
//       title: "Supreme Court Rules on Landmark Case",
//       content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
//       date: "March 25, 2024"
//     },
//     
//   ];

//   // State to manage expanded state of each article
//   const [expandedArticle, setExpandedArticle] = useState(null);

//   // Function to handle click on "Read More" link
//   const handleReadMore = (id) => {
//     if (expandedArticle === id) {
//       // If already expanded, collapse on click
//       setExpandedArticle(null);
//     } else {
//       // Otherwise, expand the clicked article
//       setExpandedArticle(id);
//     }
//   };

//   return (
//     <div className="bg-gray-100 min-h-screen flex">
      
//       <div className="flex-1 max-w-6xl py-40 md:pl-64">
//       <div className='flex absolute right-24'>
      
//     </div>
//         <marquee className="text-3xl font-semibold text-gray-800 mb-4 text-center uppercase">
//           The videos section is currently in the works. We appreciate your patience as we finalize its implementation.
//         </marquee>
//         <h1 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Legal News Updates</h1>
//         <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {/* Render news articles */}
//           {newsArticles.map(article => (
//             <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
//               <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
//               <p className="text-sm text-gray-500 mb-2">{article.date}</p>
//               {expandedArticle === article.id ? (
//                 <div>
//                   <p className="text-base text-gray-700 mb-4">{article.content}</p>
//                   <button onClick={() => handleReadMore(article.id)} className="text-blue-500">Read Less</button>
//                 </div>
//               ) : (
//                 <div>
//                   <p className="text-base text-gray-700 mb-4">{article.content.slice(0, 150)}...</p>
//                   <button onClick={() => handleReadMore(article.id)} className="text-blue-500">Read More</button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default WhatsNew;
///////////////////////////////////////working pattern//////////////////////////////from above///////// if backfires//////////////
// WhatsNew.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import articles from '../page3/articles.json'; // Import the JSON file

function WhatsNew() {
  const [expandedArticle, setExpandedArticle] = useState(null);

  const handleReadMore = (id) => {
    setExpandedArticle(id);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="flex-1 max-w-6xl py-40 md:pl-64">
      <Link to="/Mailarticle" target="_blank" rel="noopener noreferrer">
  <div className=" rounded-md overflow-auto mt-6 whitespace-nowrap cursor-pointer text-red-500 italic">
    <marquee behavior="scroll" direction="left" scrollamount="8">
      If you want to get your article published,click here            
    </marquee>
  </div>
</Link>

        <h1 className="mt-2 text-3xl font-semibold text-gray-800 mb-4 text-center">Legal News Updates</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Render news articles */}
          {articles.map(article => (
            <div key={article.id} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
              <p className="text-sm text-gray-500 mb-2">{article.date}</p>
              <div>
                {expandedArticle === article.id ? (
                  <div>
                    <p className="text-base text-gray-700 mb-4">{article.content}</p>
                    {/* <Link to={`/news/${article.id}`} className="text-blue-500">Read Less</Link> */}
                  </div>
                ) : (
                  <div>
                    <p className="text-base text-gray-700 mb-4">{article.content.slice(0, 150)}...</p>
                    <Link to= {`/news/${article.title }` }target="_blank" rel="noopener noreferrer" className="text-blue-500">Read More</Link>
                    {/* <button onClick={() => handleReadMore(article.id)} className="text-blue-500">Read less</button> */}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default WhatsNew;
