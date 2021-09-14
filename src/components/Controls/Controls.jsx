import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onSubmit, url, urlChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={url} onChange={urlChange} />
    <input type="radio"></input>
    <input type="radio"></input>
    <input type="radio"></input>
    <input type="radio"></input>
    <input type="radio"></input>
    <button>Submit!</button>
    <textarea>Body for response...</textarea>
  </form>
);

Controls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  urlChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  res: PropTypes.string.isRequired,
};

export default Controls;
