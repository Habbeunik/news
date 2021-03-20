import React from "react";

function Header(props) {
  return (
    <div className="header">
      <h1>Home</h1>
      <h4 className="headerSubTitle">{props.page}</h4>
    </div>
  );
}

export default Header;
