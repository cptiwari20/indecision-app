import React, { Component } from 'react';

export default class Actions extends Component {
  render(){
    return(
      <div>
        <button 
          onClick={this.props.handleClick} 
          disabled={this.props.options === 0}>
          What Should I Do?
        </button>
        <button onClick={this.props.handleRemoveAll}>Remove All</button>
      </div>
    )
  }
};