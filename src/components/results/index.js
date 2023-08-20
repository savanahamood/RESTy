import React from 'react';
import './results.scss';

class Results extends React.Component {
  render() {
    return (
      <section className="res">
        <pre>{this.props.data ? JSON.stringify(this.props.data, undefined, 2) : null}</pre>
      </section>
    );
  }
}

export default Results;
