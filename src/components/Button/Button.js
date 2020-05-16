import React from 'react';
import {Link} from 'react-scroll';

import s from './Button.module.scss';

const Button = ({ children }) => {
  return <button
      className={s.button}
    >
      <Link
        to="cardHolder"
        smooth={true}
        offset={-80}
        duration={1000}
      >
      {children}
      </Link>
    </button>;
};

export default Button;