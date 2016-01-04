import { EventEmitter } from 'events';
import AppDispatcher from '../AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import Connection from '../lib/Connection';

const CHANGE_EVENT = 'change';

class SubmissionsStore extends EventEmitter {
  constructor() {
    super();

    this.submissions = null;
  }

  getSubmissions() {
    return this.submissions;
  }

  addChangeListener(listener) {
    this.addListener(CHANGE_EVENT, listener);
  }

  removeChangeListener(listener) {
    this.removeListener(CHANGE_EVENT, listener);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }
}

const submissionsStore = new SubmissionsStore();

submissionsStore.dispatchToken = AppDispatcher.register((payload) => {
  switch (payload.action.actionType) {
  case ActionTypes.GET_SUBMISSIONS:
    Connection.get('/submissions/pending').then((response) => {
      submissionsStore.submissions = response.data;
      submissionsStore.emitChange();
    });
    break;

  default:
    // Do nothing
  }
});

export default submissionsStore;