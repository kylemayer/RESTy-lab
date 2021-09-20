import React from 'react';
import PropTypes from 'prop-types';
import ReactJson from 'react-json-view';

const Body = ({ response }) => {
  return (
    <section aria-label="response">
      <ReactJson src={response} />
    </section>
  );
};
Body.propTypes = {
  response: PropTypes.any,
};

export default Body;
