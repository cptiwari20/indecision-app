import React, { Component } from 'react';

export default class Option extends Component {
  render(){
    return(
      <h4>Option: {this.props.option}</h4>
    )
  }
};