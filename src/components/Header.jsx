import React from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <NavLink to="/projects">Go to Projects</NavLink>
      <NavLink to="/projects/create">Go to Create</NavLink>
      
    </header>
  );
}

export default Header