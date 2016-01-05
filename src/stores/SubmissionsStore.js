import BaseStore from './BaseStore';
import Connection from '../lib/Connection';

class SubmissionsStore extends EventEmitter {
  getSubmissions() {
    return Connection.get('/submissions/pending');
  }
}

const submissionsStore = new SubmissionsStore();

export default submissionsStore;