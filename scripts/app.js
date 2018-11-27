
// var templete = <p>This is a JSX syntax</p>
var templete = React.createElement(
  'h1',
  { id: 'someId'},
  'this is some content'
)
var appRoot = document.querySelector('#app');

ReactDOM.render(templete, appRoot)