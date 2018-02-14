import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Example extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.age}</h2>
      </div>
    );
  }
}

export default Example;
