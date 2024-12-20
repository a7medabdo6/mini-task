import React from "react";

const userAvatar = "https://via.placeholder.com/40";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-gray-800 p-4 pr-14 flex justify-between items-center">
      <div className="text-white text-lg font-semibold">Mini Pharma</div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={userAvatar}
            alt="User Avatar"
            className="w-10 h-10  rounded-full border-2 border-white cursor-pointer"
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
