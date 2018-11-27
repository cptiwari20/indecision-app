class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);

    this.state = {options: ["one", "two option", "three"]}
  }

  handleRemoveAll(){
      this.setState(() =>{ return { options: []} });
      console.log(this.state)
  }
  handleClick(){
    const i = Math.floor(Math.random() * this.state.options.length)
    const option = this.state.options[i]
    if(!option){
      alert('Sorry no Option Found');
    }
    alert(option)
  }
  handleAddOption(option){
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

class Header extends React.Component {
  render(){
    return(
      <div>
        <h1>{this.props.title}</h1>
        <h3>{this.props.subtitle}</h3>
      </div>
    )
  }
}
class Actions extends React.Component {
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
}
class Option extends React.Component {
  render(){
    return(
      <h4>Option: {this.props.option}</h4>
    )
  }
}
class Options extends React.Component {
  render(){
    return(
      <div>
        {this.props.options.map((option, i) => {
          return(
            <Option option={option} key={i} />
          )
        })}
      </div>
    )
  }
};
class AddOptions extends React.Component {
  handleAdd(e){
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option){
      this.props.handleAddOption(option)
    }
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
}

ReactDOM.render(<IndecisionApp />, document.querySelector('#app'))
