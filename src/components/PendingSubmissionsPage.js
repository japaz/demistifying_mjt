import React from 'react';
import SubmissionsList from './SubmissionsList';
import SubmissionsStore from '../stores/SubmissionsStore';

class PendingSubmissionsPage extends SubmissionsList {
  constructor(props) {
    super(props);
    this.state = {
      submissions: []
    };
    this._onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    SubmissionsStore.getSubmissions();
  }

  componentWillMount() {
    SubmissionsStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    SubmissionsStore.removeChangeListener(this._onChange);
  }

  onChange() {
    this.setState({ submissions: SubmissionsStore.getSubmissions() });
  } 

  render() {
    return (
      <SubmissionsList attributes={['first_name', 'last_name']}
        submissions={this.state.submissions} />
    );
  }
};

export default PendingSubmissionsPage;