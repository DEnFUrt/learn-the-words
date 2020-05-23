import React from 'react';

import s from './Copyright.module.scss';

const Copyright = () => {
  return (
    <div
      className={s.wrap}
    >
      <span>© 2020 <a href="http://furtaevdv.site/">Денис Фуртаев</a></span>
    </div>
  );
}

export default Copyright;