import React from "react";
import NavOptions from "./NavOptions";

function Navbar() {
  return (
    <div className="bg-gray-light bg-opacity-50 w-full m-auto flex text-white h-20">
      <div className="w-full lg:w-4/5 flex m-auto items-center p-2 justify-between transition-all duration-200 ease-in">
        <div className="cursor-pointer ml-4 lg:ml-6 object-contain">
          <img
            src="https://www.gensh.in/typo3conf/ext/awsm_page_package/Resources/Public/Images/Logo/logo_genshin_40_white.png"
            alt=""
          />
        </div>

        <div className="hidden sm:flex space-x-6 mr-4 lg:mr-8 font-bold text-xl">
          <NavOptions link="/characters" title="Characters" />
          <NavOptions link="/artifacts" title="Artifacts" />
          <NavOptions link="/domain" title="Domain" />
          <NavOptions link="/weapons" title="Weapons" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
