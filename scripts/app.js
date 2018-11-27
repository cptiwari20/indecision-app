"use strict";

var appRoot = document.querySelector('#app');

var app = {
  title: "Indecision App",
  subtitle: "Put your options inside your mind into computer",
  options: ["one", "two"]
};

function addOption(e) {
  e.preventDefault();
  var option = e.target.elements.option.value;
  if (!option) {
    return console.log('Please enter some option!');
  }
  app.options.push(option);
  e.target.elements.option.value = "";
  renderDOM();
}

function renderDOM() {

  var templete = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      app.title
    ),
    React.createElement(
      "p",
      null,
      app.subtitle
    ),
    React.createElement(
      "ul",
      null,
      app.options.map(function (option) {
        return React.createElement(
          "li",
          { key: option },
          option
        );
      })
    ),
    React.createElement(
      "form",
      { onSubmit: addOption },
      React.createElement("input", { type: "text", name: "option" }),
      React.createElement(
        "button",
        { type: "submit" },
        "Add option"
      )
    )
  );

  ReactDOM.render(templete, appRoot);
}
renderDOM();
