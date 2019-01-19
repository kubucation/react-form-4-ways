import React from 'react';
import Input from './Input';
import {Link} from 'react-router-dom';

const handleSubmit = e => {
  e.preventDefault();
  alert(e.target['customer-id'].value);
};

const HTMLForm = () => (
  <div>
    <h2>Native Form</h2>
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        label="Customer ID"
        id="customer-id"
        name="customer-id"
      />
      <button type="submit">Submit</button>
      <Link to="summary">Conclusions</Link>
    </form>
  </div>
);

export default HTMLForm;
