import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// import UIkit from 'uikit';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
          <li
            className={useLocation().pathname === '/' ? 'uk-active activeCustom' : ''}
          >
            <Link to="/">Who am I</Link>
          </li>
          <li
            className={
              useLocation().pathname === '/experience' ? 'uk-active activeCustom' : ''
            }
          >
            <Link to="/experience">Experience</Link>
          </li>
          <li
            className={
              useLocation().pathname === '/contacts' ? 'uk-active activeCustom' : ''
            }
          >
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
