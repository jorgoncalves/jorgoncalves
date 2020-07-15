import React from 'react';
import { Link } from 'react-router-dom';

// import UIkit from 'uikit';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <Link to="/">Who am I</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
