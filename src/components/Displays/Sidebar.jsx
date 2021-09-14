import React from 'react';
import PropTypes from 'prop-types';
import History from '../displays/History';

const Sidebar = ({ history }) => {
  const historyList = history.map((item, index) => (
    <li key={index}>
      <History {...item} />
    </li>
  ));

  return (
    <ul>
      {historyList}
    </ul>
  );
};

Sidebar.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired
    })).isRequired
};

export default Sidebar;
