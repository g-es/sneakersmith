import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => (
  <div className="navigation">
    <img src="http://res.cloudinary.com/paulsg10/image/upload/v1539456790/zwyb03ok1hsidmcyo87a.jpg" id="logo" ></img>
    <h1 id="title" >SneakerSmith</h1>
    <NavLink to="/"><button className="navButton">Listing</button></NavLink>
    <NavLink to="/login"><button className="navButton">Login</button></NavLink>
    <NavLink to="/signup"><button className="navButton">Sign Up</button></NavLink>
  </div>
);

export default Navigation;
