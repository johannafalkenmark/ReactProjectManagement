import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      {/* <Btn className="btn"> */}
        <NavLink to="/projects">Projects</NavLink>
      {/* </Btn> */}
      <h1>Project Manager</h1>

      {/* <Btn className="btn"> */}
        
        <NavLink to="/projects/create">Create</NavLink>
      {/* </Btn> */}
    </header>
  );
};

export default Header;
