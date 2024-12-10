import React from 'react';
import PropTypes from 'prop-types';
import './List.css';

function List({ items }) {
  return (
    <ul className="custom-list">
      {items.map((item, index) => (
        <li key={index} className="custom-list-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default List;