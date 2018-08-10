import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { increment } from '../actions/counter';

class HelloChild extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    let actionName = e.target.name.toUpperCase();
    this.props.dispatch({ type: actionName });
  }

  render() {
    return (
      <div>
        Hello-Child
        <ul>
          <li>
            <Link to="/hello?color=Blue&size=40">with query string</Link>
          </li>
          <li>
            <Link to="/hello#lovelove">with hash</Link>
          </li>
        </ul>
        <div>pathname: {this.props.pathname}</div>
        <div>search: {this.props.search}</div>
        <div>hash: {this.props.hash}</div>
        <br />
        <br />
        <div>
          Increment/Decrement Count from here as well:
          <button
            className="btn btn-default"
            name="increment"
            onClick={this.handleClick}>
            +
          </button>
          <button
            className="btn btn-default"
            name="decrement"
            onClick={this.handleClick}>
            -
          </button>
        </div>
      </div>
    );
  }
}

HelloChild.propTypes = {
  pathname: PropTypes.string,
  search: PropTypes.string,
  hash: PropTypes.string
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash
});

export default connect(mapStateToProps)(HelloChild);
