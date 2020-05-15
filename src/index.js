import React from 'react';
import ReactDOM from 'react-dom';

import HeaderBlock from '../src/components/HeaderBlock';

const AppList = () => {
  const items = ['item 1', 'item 2', 'item 3', 'item 4'];
  const firstItem = <li>Item 0</li>;
  const isAuth = false;

  return (
    <ul>
      { isAuth ? firstItem : null }
      { items.map(item => <li>{item}</li>) }
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
};

const AppHeader = () => <h1>My Header</h1>;

const AppInput = () => {
  const placeholder = 'Type text...';

  return (
    <label htmlFor="search">
      <input id="search" placeholder={placeholder} />
    </label>
  );
};

const App = () => {
  return (
    <>
      <HeaderBlock />
      <AppHeader />
      <AppInput />
      <AppList />
      <AppHeader />
      <AppList />
    </>
  );
};

ReactDOM.render(
  <App />, document.getElementById('root')
);
