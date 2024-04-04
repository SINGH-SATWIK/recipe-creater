"use client"

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const Navbar = () => {
  return (
    <nav className="nav justify-content-center navbar-light bg-success">
    <li className="nav-item">
    <a className="nav-link text-light" href="#"><h2>Recipe Creater</h2></a>
  </li>
 
</nav>
  );
};
 
export default Navbar;