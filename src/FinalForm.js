import React from 'react';
import Input from './Input';
import {Link} from 'react-router-dom';

const FinalForm = () => (
  <div>
    <h2>Final Form</h2>
    <form>
      <Input
        type="text"
        label="Customer ID"
        id="customer-id"
        name="customer-id"
      />
      <button type="submit">Submit</button>
    </form>
    <Link to="summary">Conclusions</Link>
  </div>
);

export default FinalForm;

// const composeValidators = (...validators) => value =>
//   validators.reduce((error, validator) => error || validator(value), undefined);
