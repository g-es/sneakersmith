import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = (props) => {
  const { isLoggedIn } = props;
  console.log(isLoggedIn);
  const loginButton = isLoggedIn ? <NavLink to="/login"><button className="navButton">Login</button></NavLink> : <NavLink to="/"><button className="navButton">Logout</button></NavLink>;

  return (
    <div className="navigation">
      <img src="http://res.cloudinary.com/paulsg10/image/upload/v1539456790/zwyb03ok1hsidmcyo87a.jpg" id="logo" />
      <h1 id="title">SneakerSmith</h1>
      <NavLink to="/"><button className="navButton">Listing</button></NavLink>
      {loginButton}
      <NavLink to="/signup"><button className="navButton">Sign Up</button></NavLink>
    </div>
  );
};

export default Navigation;
