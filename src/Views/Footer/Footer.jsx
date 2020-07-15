import React, { useState } from 'react';
import Icon from '../../Components/Icon/Icon';

import './Footer.css';

export default function Footer() {
  const [icons] = useState([
    { icon: 'linkedin', link: 'https://www.linkedin.com/in/jorgoncalves/' },
    { icon: 'github', link: 'https://github.com/jorgoncalves' },
    { icon: 'mail', link: 'mailto:jorge.oliveira.goncalves@outlook.pt' }
  ]);

  return (
    <div className="uk-position-bottom customBottomm uk-background-muted">
      {icons.map((icon) => (
        <Icon icon={icon.icon} link={icon.link} />
      ))}
    </div>
  );
}
