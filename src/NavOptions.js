import React from "react";
import { NavLink } from "react-router-dom";

function NavOptions({ link, title }) {
  //   const { match, location, history } = withRouter();
  return (
    <div className="  p-4">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive
            ? "text-red-500 hover:text-red-500"
            : `h-14 flex items-center p-5 sm:p-0 sm:h-auto text-gray-300 hover:text-gray-100`
        }
        activeClassName="text-red-500 hover:text-red-500"
      >
        <h2>{title}</h2>
      </NavLink>
    </div>
  );
}

export default NavOptions;
