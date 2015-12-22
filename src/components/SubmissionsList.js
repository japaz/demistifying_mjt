
import React from 'react';

class SubmissionsList extends React.Component {
  render() {
    const headers = this.props.attributes.map(header => {
      return (
        <th key={`header-${header}`}>{header}</th>
      );
    });

    const body = this.props.submissions.map(submission => {
      const tr = this.props.attributes.map(attribute => {
        return (<td key={`value-${attribute}`}>{submission[attribute]}</td>);
      });

      return (
        <tr key={submission.id}>
          {tr}
          <td><Link to={`/submissions/${submission.id}`}>Show</Link></td>
        </tr>
      );
    });

    return (
      <table>
        <thead><tr>{headers}</tr></thead>
        <tbody>{body}</tbody>
      </table>
    )
  }
};

export default SubmissionsList;