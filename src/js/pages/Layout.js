import React from "react";
import {Link} from "react-router";

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives" class='btn btn-danger'>archives</Link>
        <Link to="featured" class='btn btn-warning'>featured</Link>
        <Link to="settings" class='btn btn-success'>settings</Link>
      </div>
    );
  }
}