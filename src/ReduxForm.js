import React from 'react';
import Input from './Input';
import {Link} from 'react-router-dom';
import {reduxForm, Field} from 'redux-form';

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

const ReduxForm = ({handleSubmit, valid}) => (
  <div>
    <h2>Redux Form</h2>
    <form onSubmit={handleSubmit}>
      <Field
        name="customer-id"
        component={renderInput}
        validate={[required, allowedNames]}
      />
      <button disabled={!valid} type="submit">
        Submit
      </button>
    </form>
    <Link to="summary">Conclusions</Link>
  </div>
);

export default reduxForm({
  form: 'my-customer-registration-form',
  onSubmit,
})(ReduxForm);
