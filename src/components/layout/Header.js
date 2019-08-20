import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
    </header>
  );
}

const headerStyle = {
  color: "#fff",
  textAlign: "center",
  padding: "10px"
};

const linkStyle = {
  color: "#fff"
};

export default Header;
