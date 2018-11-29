import React, { Component } from 'react';

export default class AddOptions extends Component {
  state = { error: undefined }
  handleAdd = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(!option){
      return this.setState({ error: "ERROR: Please enter some text"})
    }
    this.props.handleAddOption(option);
    e.target.elements.option.value = "";
    this.setState({error: undefined});
  }
  render(){
    return(
      <form onSubmit={this.handleAdd}>
          {this.state.error && <h4>{this.state.error}</h4>}
          <input type="text" name="option"/>
          <button className="button" type='submit'>Add more options</button>
      </form>
    )
  }
};