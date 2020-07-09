import React from 'react';

import UIkit from 'uikit';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
          <li className="uk-active">
            <a href="#">Who am I</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
