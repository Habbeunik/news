import React from "react";
import { Link } from "react-router-dom";

const Shortcut = () => {
  return (
    <div className="shortcut">
      <h3 className="logo">
        NEWS <span>Plus</span>
      </h3>
      <Link to="/search?q=showbiz" className="shortcutLink">
        Showbiz & TV
      </Link>
      <Link to="/search?q=sport" className="shortcutLink">
        Sport
      </Link>
      <Link to="/search?q=comment" className="shortcutLink">
        Comment
      </Link>
      <Link to="/search?q=finance" className="shortcutLink">
        Finance
      </Link>
      <Link to="/search?q=travel" className="shortcutLink">
        Travel
      </Link>
      <Link to="/search?q=entertainment" className="shortcutLink">
        Entertainment
      </Link>
      <Link to="/search?q=lifestyle" className="shortcutLink">
        {" "}
        Life & Style
      </Link>
    </div>
  );
};

export default Shortcut;
