import React from "react";

const App = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-[400px] h-[300px] rounded-lg shadow-lg overflow-hidden">
        <img
          src="/t2c/Frame_2.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded">
          <p className="text-lg font-bold">Hricheak Ghosh</p>
          <p className="text-sm">+mjhm91-9155889801</p>
        </div>
      </div>
    </div>
  );
};

export default App;
