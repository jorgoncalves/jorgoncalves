import React from 'react';

import './Icon.css';

export default function Icon(props) {
  return (
    <a
      className="customIcon"
      href={props.link}
      target="_blank"
      uk-icon={`icon: ${props.icon}`}
      rel="noopener noreferrer"
    >
      {' '}
    </a>
  );
}
