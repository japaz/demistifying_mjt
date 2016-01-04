import React from 'react';
import ReactDOM from 'react-dom';
import Connection from '../lib/Connection';
import SubmissionActionsCreator from '../actions/SubmissionActionsCreator';

class SubmissionForm extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
    const firstName = this.refs.firstName.value.trim();
    const lastName = this.refs.lastName.value.trim();
    this.refs.firstName.value = '';
    this.refs.lastName.value = '';

    SubmissionActionsCreator.createSubmission(firstName,lastName);
  }

  render() {
    return (
      <form className="submission-form" onSubmit={this.handleSubmit.bind(this)}>
        <div className="form-field">
          <div className="label">First name:</div>
          <input name="Name" ref="firstName" />
        </div>
        <div className="form-field">
          <div className="label">Last name:</div>
          <input name="Lastname" ref="lastName" />
        </div>
        <div className="form-field">
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
};

export default SubmissionForm;