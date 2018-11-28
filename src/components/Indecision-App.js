import React, { Component } from 'react';

import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import AddOptions from './AddOptions';


class IndecisionApp extends Component {
  state = {options: ["one", "two option", "three"]}

  handleRemoveAll = () => {
      this.setState(() =>{ return { options: []} });
      console.log(this.state)
  }
  handleClick = () => {
    const i = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[i]
    if(!option){
      alert('Sorry no Option Found');
    }
    alert(option)
  }
  handleAddOption = (option) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  }

  render(){
      const title= "Indecision App";
      const subtitle = "Put your options inside your mind into computer";

    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Actions 
          handleClick={this.handleClick}
          options={this.state.options.length}
          handleRemoveAll={this.handleRemoveAll}/>
        <Options options={this.state.options}/>
        <AddOptions handleAddOption={this.handleAddOption}/>
      </div>
    )
  }
};

export default IndecisionApp;