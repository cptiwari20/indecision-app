class IndecisionApp extends React.Component {
  // constructor(){
  //   super(props);
  //   this.props.state = {option: ''}
  // }
  render(){
      const title= "Indecision App";
      const subtitle = "Put your options inside your mind into computer";
      const options = ["one", "two"];
    return(
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Actions />
        <Options options={options}/>
        <AddOptions />
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
        <button>What Should I Do?</button>
      </div>
    )
  }
}
class Option extends React.Component {
  render(){
    return(
      <h5>Option: {this.props.option}</h5>
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

  // addOption(e){
  //   this.props.setState({option: e.target.elements.option.value})
  // }
  render(){
    return(
      <form >
          <input type="text" name="option"/>
          <button type='submit'>Add option</button>
      </form>
    )
  }
}
const jsx = (
  <div>
    <IndecisionApp />
  </div>
)

ReactDOM.render(jsx, document.querySelector('#app'))
