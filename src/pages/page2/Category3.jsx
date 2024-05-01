// import React from 'react';
// import { Link } from 'react-router-dom';
// import Card from '../../compnents/Card';
// import Sidebar from '../../compnents/Sidebar';

// function CivilCategory() {
//   return (
//     <div>
//       {/* Main content */}
//       <div className="flex flex-col md:flex-row">
//        <Sidebar/>
//         <div className="flex flex-col flex-grow">
//           <h1 className='text-center mt-32 font-mono '>CIVIL LAWYERS</h1>
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
//             <Card/><Card/>
//             <Card/><Card/>
//             <Card/><Card/>
//             <Card/><Card/>
//             <Card/><Card/>
//             <Card/><Card/>
//             { /* Render multiple cards here */ }
//           </div>
//         </div>      
//       {/* Main content */}
//       </div>
//     </div>

//   );
// }

// export default CivilCategory;




////////////////////////

import React, { useEffect, useState } from 'react';
import Card from '../../compnents/Card';
import Sidebar from '../../compnents/Sidebar';
import lawyerData from './data/Civillawyer.json'; // Import JSON data directly

function Category3() {
  const [lawyers, setLawyers] = useState([]);

  useEffect(() => {
    setLawyers(lawyerData); // Set lawyers data directly from imported JSON
  }, []);

  return (
    <div>
      {/* Main content */}
      <div className="flex flex-col md:flex-row">
        <Sidebar />
        <div className="flex flex-col flex-grow">
          <h1 className='text-center mt-32 font-mono '>CIVIL LAWYERS</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {lawyers.map((lawyer, index) => (
              <Card key={index} lawyer={lawyer} />
            ))}
          </div>
        </div>
        {/* Main content */}
      </div>
    </div>
  );
}

export default Category3;