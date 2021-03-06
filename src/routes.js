import React from 'react';
import { Route } from 'react-router';
import Main from './components/Main';
import PendingSubmissionsPage from './components/PendingSubmissionsPage';
import EvaluatedSubmissionsPage from './components/EvaluatedSubmissionsPage';
import RejectedSubmissionsPage from './components/RejectedSubmissionsPage';
import SubmissionFormPage from './components/SubmissionFormPage';
import SubmissionPage from './components/SubmissionPage';

export default (
  <Route path="/" component={Main}>
    <Route path="pending" component={PendingSubmissionsPage} />
    <Route path="evaluated" component={EvaluatedSubmissionsPage} />
    <Route path="rejected" component={RejectedSubmissionsPage} />
    <Route path="submissions/new" component={SubmissionFormPage} />
    <Route path="submissions/:id" component={SubmissionPage} />
  </Route>
);