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
     <div>
      {this.state.error && <p className="add-option--error">{this.state.error}</p>}
      <form 
        className="add-option"
        onSubmit={this.handleAdd}>
          <input className="add-option--input" type="text" name="option"/>
          <button className="button" type='submit'>Add more options</button>
      </form>
     </div>
    )
  }
};