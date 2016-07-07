import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Main = (props) => (
  <div>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1 className="title">
        Notedash
      </h1>
    </Link>
    {props.children}
  </div>
);

Main.propTypes = {
  children: PropTypes.element
};

export default Main;
