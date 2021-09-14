/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onSubmit, url, urlChange, method, response, responseChange }) => (
  <form onSubmit={onSubmit}>
    <input type="text" value={url} onChange={urlChange} />
    <label> GET
      <input type="radio" name="method" value={method}/>
    </label>
    <label> POST
      <input type="radio" name="method" value={method}/>
    </label>
    <label> PUT
      <input type="radio" name="method" value={method}/>
    </label>
    <label> PATCH
      <input type="radio" name="method" value={method}/>
    </label>
    <label> DELETE
      <input type="radio" name="method" value={method}/>
    </label>
    <button>Submit!</button>
    <textarea name="response" value={response} responseChange={responseChange}>
        Body for response...
    </textarea>
  </form>
);

Controls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  urlChange: PropTypes.func.isRequired,
  method: PropTypes.string.isRequired,
  response: PropTypes.string.isRequired,
  responseChange: PropTypes.func.isRequired,
};

export default Controls;
