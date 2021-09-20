import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Body = ({ response }) => {
  return (
    <div role="body" aria-label="response">
      <ReactJson src={response} />
    </div>
  );
};
Body.propTypes = {
  response: PropTypes.any,
};

export default Body;
