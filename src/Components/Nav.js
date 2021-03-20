import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div>
      <NavLink className="navLink" exact activeClassName="navLinkActive" to="/">
        Top Headlines
      </NavLink>
      <NavLink className="navLink" activeClassName="navLinkActive" to="/all">
        All News
      </NavLink>
      <NavLink className="navLink" activeClassName="navLinkActive" to="/search">
        Search
      </NavLink>
    </div>
  );
}

export default Nav;
