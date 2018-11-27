'use strict';

var templete = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'This is an indecision app'
  )
);
var appRoot = document.querySelector('#app');

ReactDOM.render(templete, appRoot);
