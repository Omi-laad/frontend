// Alert.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Logo  from '../../src/img/Logo.png';

const Alert = ({}) => {
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();
  const handleAgree = () => {
    if (isChecked) {
        navigate('/home')
    }
    else{
      toast("Please check the box before proceeding");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white max-w-lg p-8 rounded-lg shadow-lg">
      <div className="rounded-8 shadow-md w-3/4 h-3/4 flex items-center justify-center ml-10">
            <img src={Logo} alt="Logo" className="h-24 w-24" />
            <h1 className="text-black text-lg  md:ml-2 font-semibold italic ">न्याय Saarthi</h1>
          </div>

        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">Notice!</h2>
        <div className="mb-4">
          <p className="text-gray-800 text-base text-justify">
            At Nyaysaarthi, we firmly believe in offering guidance and advice that empowers individuals to make informed decisions. However, it's essential to emphasize that we do not impose our recommendations on anyone. We respect the autonomy of each individual to choose their own path.
            <br/> Therefore, Nyaysaarthi holds no responsibility for any outcomes resulting from decisions made independently by our clients. We strive to provide comprehensive support and insights, but ultimately, the responsibility for actions and their consequences lies solely with the individual.
          </p>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="agree"
              className="mr-2"
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
            />
            <span className="text-gray-700 text-sm">I have read the terms and conditions</span>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            className={`px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 ${isChecked ? '' : 'opacity-50 cursor-not-allowed'}`}
            onClick={handleAgree}
            disabled={!isChecked}
          >
            Agree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
