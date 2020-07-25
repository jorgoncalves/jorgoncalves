import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// import UIkit from 'uikit';

import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="uk-navbar-container navbarCustom" uk-navbar="true">
      <div className="uk-navbar-center">
        <ul className="uk-navbar-nav">
          <li
            className={[
              'box',
              useLocation().pathname === '/' ? 'uk-active activeCustom' : ''
            ].join(' ')}
          >
            <Link
              to="/"
              className={
                useLocation().pathname === '/' ? '' : 'custom-underline'
              }
            >
              Who am I
            </Link>
          </li>
          <li
            className={[
              'box',
              useLocation().pathname === '/experience'
                ? 'uk-active activeCustom'
                : ''
            ].join(' ')}
          >
            <Link
              to="/experience"
              className={
                useLocation().pathname === '/experience'
                  ? ''
                  : 'custom-underline'
              }
            >
              Experience
            </Link>
          </li>
          <li
            className={[
              'box',
              useLocation().pathname === '/contacts'
                ? 'uk-active activeCustom'
                : ''
            ].join(' ')}
          >
            <Link
              to="/contacts"
              className={
                useLocation().pathname === '/contacts' ? '' : 'custom-underline'
              }
            >
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
