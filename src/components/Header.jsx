import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/projects">Projects</NavLink>
      <h1>Project Manager</h1>
      <NavLink to="/create-project">Create</NavLink>
    </header>
  );
};

export default Header;
