import React from 'react';
import PropTypes from 'prop-types';

const History = ({ url, method }) =>
  <div>
    <span>{url}</span>
    <span>{method}</span>
  </div>;

History.propTypes = {
  url: PropTypes.string.isRequired,
  method: PropTypes.string.isRequired,
};

export default History;
