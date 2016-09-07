import React from "react";

export default class Archives extends React.Component {
  render() {
    const { params } = this.props;
    const { article } = params;
    const { query } = this.props.location;
    const { date, filter } = query;


    return (
      <div>
        <h1>Archives ({article})</h1>
        <h4>date: {date}</h4>
        <h4>filter: {filter}</h4>
      </div>
    );
  }
}