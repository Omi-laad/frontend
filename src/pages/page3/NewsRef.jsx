// // import React from 'react';
// // import { useParams } from 'react-router-dom';

// // const NewsRef = ({ newsArticles }) => {
// //   const { id } = useParams();
// //   const article = newsArticles.find(article => article.id === parseInt(id));

// //   if (!article) {
// //     return <div>Error: Article not found</div>;
// //   }

// //   return (
// //     <div className="bg-white rounded-lg shadow-md p-6">
// //       <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
// //       <p className="text-sm text-gray-500 mb-2">{article.date}</p>
// //       <p className="text-base text-gray-700 mb-4">{article.content}</p>
// //       <button onClick={() => window.history.back()} className="text-blue-500">Go Back</button>
// //     </div>
// //   );
// // }

// // export default NewsRef;


// // NewsRef.jsx
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import articles from '../page3/articles.json';


// const NewsRef = () => {
//   const { title } = useParams();
//   const article = articles.find(article => article.title === parse(title));

//   if (!article) {
//     return <div>Error: Article not found</div>;
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-md p-6">
//       <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
//       <p className="text-sm text-gray-500 mb-2">{article.date}</p>
//       <p className="text-base text-gray-700 mb-4">{article.content}</p>
//       <button onClick={() => window.history.back()} className="text-blue-500">Go Back</button>
//     </div>
//   );
// }

// export default NewsRef;


// NewsRef.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../page3/articles.json';

const NewsRef = () => {
  const { title } = useParams();

  // Replace spaces in the title with dashes to match the format in the JSON data
  const formattedTitle = title.replace(/-/g, ' ');

  // Find the article with the matching title
  const article = articles.find(article => article.title === formattedTitle);

  if (!article) {
    return <div>Error: Article not found</div>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{article.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{article.date}</p>
      <p className="text-base text-gray-700 mb-4">{article.content}</p>
      {/*  <button onClick={() => window.history.back()} className="text-blue-500">Go Back</button> */}
    </div>
  );
}

export default NewsRef;
