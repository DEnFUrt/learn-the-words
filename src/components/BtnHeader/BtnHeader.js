import React from 'react';
import {Link} from 'react-scroll';

import s from './BtnHeader.module.scss';

const BtnHeader = ({ children }) => {
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

export default BtnHeader;