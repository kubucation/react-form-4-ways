import React from 'react';

const Input = ({errorMessage, ...props}) => (
  <div className="input-text">
    <input {...props} />
    {errorMessage && <span className="errorMessage">{errorMessage}</span>}
  </div>
);

export default Input;
