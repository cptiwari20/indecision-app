function addOption(e){
  e.preventDefault();
  const option = e.target.elements.option.value;
  if(!option){
    return console.log('Please enter some option!')
  }
  app.options.push(option);
  e.target.elements.option.value = "";
  renderDOM();
}

function renderDOM(){

    const templete = (
      <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ul>
          {app.options.map(option => {
            return <li key={option}>{option}</li>
          })}
        </ul>
        <form onSubmit={addOption}>
          <input type="text" name="option"/>
          <button type='submit'>Add option</button>
        </form>
        
      </div>
    )

    ReactDOM.render(templete, document.querySelector('#app'))
}
renderDOM()