import React from 'react';
import Input from './Input';

const HTMLForm = () => (
  <div>
    <h2>Native Form</h2>
    <form>
      <Input
        type="text"
        label="Customer ID"
        id="customer-id"
        name="customer-id"
      />
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default HTMLForm;
