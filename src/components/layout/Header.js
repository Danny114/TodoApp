import React from "react";

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
