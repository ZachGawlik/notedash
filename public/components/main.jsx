import React, { PropTypes } from 'react';

const Main = (props) => (
  <div>
    <h1 className="title">Notedash</h1>
    {props.children}
  </div>
);

Main.propTypes = {
  children: PropTypes.element
}

export default Main;
