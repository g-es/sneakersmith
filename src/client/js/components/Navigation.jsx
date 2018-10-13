import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <div className="navigation">
    <NavLink to="/"><button className="navButton">Listing</button></NavLink>
    <NavLink to="/login"><button className="navButton">Login</button></NavLink>
    <NavLink to="/signup"><button className="navButton">Sign Up</button></NavLink>
  </div>
);

export default Navigation;
