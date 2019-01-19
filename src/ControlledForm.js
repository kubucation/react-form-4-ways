import React from 'react';
import Input from './Input';
import {Link} from 'react-router-dom';

class ControlledForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customerId: '',
    };
  }

  handleInputChange = e => {
    this.setState({
      customerId: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert(`The customer id is ${this.state.customerId}`);
  };

  isValid() {
    if (this.state.customerId === '') {
      return false;
    }

    return true;
  }

  render() {
    return (
      <div>
        <h2>Controlled Form</h2>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            label="Customer ID"
            id="customer-id"
            name="customer-id"
            onChange={this.handleInputChange}
            value={this.state.customerId}
            errorMessage={this.isValid() ? '' : 'This field is required'}
          />
          <button disabled={!this.isValid()} type="submit">
            Submit
          </button>
        </form>
        <Link to="summary">Conclusions</Link>
      </div>
    );
  }
}

export default ControlledForm;
