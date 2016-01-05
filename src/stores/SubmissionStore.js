import BaseStore from './BaseStore';
import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import Connection from '../lib/Connection';

class SubmissionStore extends EventEmitter {
  constructor() {
    super();

    this.submission = null;
  }

  getSubmission(submissionId) {
    return this.submission;
  }
}

const submissionStore = new SubmissionStore();

submissionStore.dispatchToken = AppDispatcher.register((payload) => {
  let id;
  switch (payload.action.actionType) {
  case ActionTypes.REQUEST_SUBMISSION:
    id = payload.action.id;
    Connection.get(`/submissions/${id}`).then((response) => {
      submissionStore.submission = response.data;
      submissionStore.emitChange();
    });
    break;
  case ActionTypes.PERFORM_RATING:
    id = payload.action.id;
    const rate = payload.action.rate;
    Connection.post(`/submissions/${id}/rate`, { rate: rate }).then(
      (response) => {
        submissionStore.submission = response.data;
        submissionStore.emitChange();
    });
    break;
  case ActionTypes.CREATE_SUBMISSION:
    const data = {
      submission: {
        first_name: payload.action.firstName,
        last_name: payload.action.lastName
      }
    };
    Connection.post('/submissions', data).then((response) => {
      submissionStore.submission = response.data;
      submissionStore.emitChange();
      console.log(data);
    });    
    break;

  default:
    // Do nothing
  }
});

export default submissionStore;