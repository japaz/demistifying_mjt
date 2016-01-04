import ActionTypes from '../constants/ActionTypes';
import AppDispatcher from '../AppDispatcher';

const SubmissionActionsCreator = {
  requestSubmission(id) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.REQUEST_SUBMISSION,
      id: id
    })
  },

  performRating(id, rate) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.PERFORM_RATING,
      id: id,
      rate: rate
    })
  },

  createSubmission(firstName, lastName) {
    AppDispatcher.handleViewAction({
      actionType: ActionTypes.CREATE_SUBMISSION,
      firstName: firstName,
      lastName: lastName
    })
  }
}

export default SubmissionActionsCreator;