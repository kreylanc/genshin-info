import React from "react";
import { NavLink, withRouter } from "react-router-dom";

function NavOptions({ link, title }) {
  //   const { match, location, history } = withRouter();
  return (
    <NavLink
      to={link}
      className={`text-gray-300 hover:text-gray-100`}
      activeClassName="text-red-500 hover:text-red-500"
    >
      <h2>{title}</h2>
    </NavLink>
  );
}

export default NavOptions;
