import React from "react";
// El Outlet es como un Placeholder en un input
import { Link, Outlet } from "react-router-dom";

import './NavBar.css'

const NavBar = () => {
  return (
    <>
      <header>
        <ol>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to='/episodes'>Episodes</Link>
          </li>
        </ol>
      </header>
        <div>
          <Outlet />
        </div>
    </>
  );
};

export default NavBar;
