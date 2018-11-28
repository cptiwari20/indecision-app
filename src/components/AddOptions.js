import React, { Component } from 'react';

export default class AddOptions extends Component {
  handleAdd(e){
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(!option){
      return alert("ERROR: Please enter some text")
    }
    this.props.handleAddOption(option)
    e.target.elements.option.value = "";
  }
  render(){
    return(
      <form onSubmit={this.handleAdd.bind(this)}>
          <input type="text" name="option"/>
          <button type='submit'>Add option</button>
      </form>
    )
  }
};