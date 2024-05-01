import React from 'react';

const Loading = ({ loading }) => {
  return (
    loading && (
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-200 bg-opacity-50 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      </div>
    )
  );
};

export default Loading;
