import React from 'react';
import SubmissionsList from './SubmissionsList';
import { connect } from 'react-redux';
import { fetchSubmissionsList } from '../actions_creators/SubmissionsListActionsCreator';

class PendingSubmissionsPage extends React.Component {
  attributes() {
    return ['first_name', 'last_name'];
  }

  static fetchData(dispatch, params) {
    return dispatch(fetchSubmissionsList('pending'));
  }

  componentWillMount() {
    PendingSubmissionsPage.fetchData(this.props.dispatch);
  }

  render() {
    return (
      <SubmissionsList attributes={this.attributes()}
        submissions={this.state.submissions} />
    );
  }
};


function select(state) {
  const values = Object.keys(state.submissions).map(k => state.submissions[k]);
  return {
    submissions: values
  };
}  


export default connect(select)(PendingSubmissionsPage);