import React from 'react';
import Input from './Input';
import {Form, Field} from 'react-final-form';

const renderInput = ({input, meta}) => (
  <Input {...input} type="text" errorMessage={meta.touched && meta.error} />
);

const onSubmit = values => {
  alert(JSON.stringify(values));
};

const required = v => {
  if (!v || v === '') {
    return 'This field is required';
  }

  return undefined;
};

const allowedNames = v => {
  if (v === 'forbidden name') {
    return '"forbidden name" is not a valid customer id';
  }

  return undefined;
};

const FinalForm = () => (
  <Form
    onSubmit={onSubmit}
    render={({handleSubmit, invalid}) => (
      <div>
        <h2>Final Form</h2>
        <form onSubmit={handleSubmit}>
          <Field
            name="customer=id"
            component={renderInput}
            validate={composeValidators(required, allowedNames)}
          />
          <button type="submit" disabled={invalid}>
            Submit
          </button>
        </form>
      </div>
    )}
  />
);

const composeValidators = (...validators) => value =>
  validators.reduce((error, validator) => error || validator(value), undefined);

export default FinalForm;
