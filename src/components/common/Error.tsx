import React from "react";

const Error: React.FC = () => {
  return (
    <div className="flex items-center justify-center bg-red-100 border-l-4 border-red-500 text-red-700 p-4 rounded-md shadow-md mb-4">
      <span className="font-semibold">Error:</span> Error loading Medications.
      Please try again later.
    </div>
  );
};

export default Error;
