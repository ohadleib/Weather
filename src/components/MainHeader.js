import React from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <div className="navigation-header">
      <aside className="sidebar">
        <h3 className='menu-header'>Menu</h3>
        <button className="sidebar-close-button" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <NavLink className='list-side-menu' onClick={closeMenu} to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='list-side-menu' onClick={closeMenu} to="/favorites">
              Favorites
            </NavLink>
          </li>
        </ul>
      </aside>
      <button className="hamburger-btn" onClick={openMenu}>
        &#9776;
      </button>
      <h2 className='main-header'>Weather App</h2>
      <div className="navigation-header-nav-links">
        <ul className="nav-links">
          <li>
            <NavLink to="/" exact>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MainHeader;
