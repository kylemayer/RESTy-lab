/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ onSubmit, url, onChange, body }) => (
  <form onSubmit={onSubmit}>
    <input type="text" name="url" value={url} onChange={onChange} />
    <label htmlFor="GET"> GET
      <input type="radio" name="method" id="GET" value="GET" onChange={onChange}/>
    </label>
    <label htmlFor="POST"> POST
      <input type="radio" name="method" id="POST" value="POST" onChange={onChange}/>
    </label>
    <label htmlFor="PUT"> PUT
      <input type="radio" name="method" id="PUT" value="PUT" onChange={onChange}/>
    </label>
    <label htmlFor="PATCH"> PATCH
      <input type="radio" name="method" id="PATCH" value="PATCH" onChange={onChange}/>
    </label>
    <label htmlFor="DELETE"> DELETE
      <input type="radio" name="method" id="DELETE" value="DELETE" onChange={onChange}/>
    </label>
    <button>Submit!</button>
    <textarea name="body" value={body} onChange={onChange}>
        Body for response...
    </textarea>
  </form>
);

Controls.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  body: PropTypes.string,
};

export default Controls;
