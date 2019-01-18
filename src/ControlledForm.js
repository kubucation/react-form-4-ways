import React from 'react';
import Input from './Input';

const ControlledForm = () => (
  <div>
    <h2>Controlled Form</h2>
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

export default ControlledForm;
