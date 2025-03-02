import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h2 className="header-text">
        <NavLink to="/projects">Projects</NavLink>
      </h2>
      <h1>Project Manager</h1>
      <h2 className="header-text">
        <NavLink to="/create-project">Create</NavLink>
      </h2>
    </header>
  );
};

export default Header;
