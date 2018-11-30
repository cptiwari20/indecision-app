import React, { Component } from 'react';

import Header from './Header';
import Actions from './Actions';
import Options from './Options';
import AddOptions from './AddOptions';
import OptionModal from './OptionModal';


class IndecisionApp extends Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  handleRemoveAll = () => {
      this.setState(() =>{ return { options: []} });
      console.log(this.state)
  }
  handleClick = () => {
    const i = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[i]
    if(!option){
      this.setState({ selectedOption: 'Sorry no Option Found'});
    }
    this.setState({ selectedOption: option })
  }
  handleAddOption = (option) => {
    this.setState((prevState) => {
      return {
        options: prevState.options.concat(option)
      }
    })
  };
  handleDeleteOption = (optionForDel) =>{
    this.setState((prevState) => {
      return {
      options: prevState.options.filter((option) => optionForDel !== option)
      }
    })
  };
  handleCloseModal =() =>{
    this.setState({selectedOption: undefined})
  }

  render(){
      const title= "Indecision App";
      const subtitle = "Put your options outside from your mind into computer";

    return(
      <div>
          <Header 
            title={title} 
            subtitle={subtitle}/>
        <div className="container">
          <Actions 
            handleClick={this.handleClick}
            options={this.state.options.length}
            handleRemoveAll={this.handleRemoveAll} />
         <div className="widget">
          <Options
          options={this.state.options}
          handleDeleteOption={this.handleDeleteOption} />
          <AddOptions 
          handleAddOption={this.handleAddOption}/>
         </div>
        </div>
        
        <OptionModal 
          selectedOption={this.state.selectedOption}
          closeModal={this.handleCloseModal}/>
      </div>
    )
  }
};

export default IndecisionApp;