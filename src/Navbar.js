import React, { useState } from "react";
import NavOptions from "./NavOptions";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="bg-gray-light bg-opacity-50 w-full m-auto flex text-white h-20">
      <div className="w-full lg:w-4/5 flex m-auto items-center p-2 justify-between transition-all duration-200 ease-in">
        <div className="cursor-pointer ml-4 lg:ml-6 object-contain">
          <Link to="/">
            <img
              src="https://www.gensh.in/typo3conf/ext/awsm_page_package/Resources/Public/Images/Logo/logo_genshin_40_white.png"
              alt=""
            />
          </Link>
        </div>

        <div
          className="sm:hidden absolute right-5 z-30 cursor-pointer "
          onClick={() => {
            handleClick();
          }}
        >
          {clicked ? <XIcon className="h-9" /> : <MenuIcon className="h-9" />}
        </div>
        <div
          className={
            clicked
              ? " navbar-mobile  top-0 right-0 left-1/4 "
              : "navbar-mobile top-0 left-28 right-0 transform translate-x-full "
          }
        >
          <NavOptions link="/characters" title="Characters" />
          <NavOptions link="/artifacts" title="Artifacts" />
          <NavOptions link="/domain" title="Domain" />
          <NavOptions link="/weapons" title="Weapons" />
        </div>

        <div className={"hidden sm:flex  sm:mr-4 lg:mr-8 font-bold text-xl"}>
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
