"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleRemoveAll = _this.handleRemoveAll.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);

    _this.state = { options: ["one", "two option", "three"] };
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: "handleRemoveAll",
    value: function handleRemoveAll() {
      this.setState(function () {
        return { options: [] };
      });
      console.log(this.state);
    }
  }, {
    key: "handleClick",
    value: function handleClick() {
      var i = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[i];
      if (!option) {
        alert('Sorry no Option Found');
      }
      alert(option);
    }
  }, {
    key: "handleAddOption",
    value: function handleAddOption(option) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var title = "Indecision App";
      var subtitle = "Put your options inside your mind into computer";

      return React.createElement(
        "div",
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Actions, {
          handleClick: this.handleClick,
          options: this.state.options.length,
          handleRemoveAll: this.handleRemoveAll }),
        React.createElement(Options, { options: this.state.options }),
        React.createElement(AddOptions, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

;

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          this.props.title
        ),
        React.createElement(
          "h3",
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Actions = function (_React$Component3) {
  _inherits(Actions, _React$Component3);

  function Actions() {
    _classCallCheck(this, Actions);

    return _possibleConstructorReturn(this, (Actions.__proto__ || Object.getPrototypeOf(Actions)).apply(this, arguments));
  }

  _createClass(Actions, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          {
            onClick: this.props.handleClick,
            disabled: this.props.options === 0 },
          "What Should I Do?"
        ),
        React.createElement(
          "button",
          { onClick: this.props.handleRemoveAll },
          "Remove All"
        )
      );
    }
  }]);

  return Actions;
}(React.Component);

var Option = function (_React$Component4) {
  _inherits(Option, _React$Component4);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h4",
        null,
        "Option: ",
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var Options = function (_React$Component5) {
  _inherits(Options, _React$Component5);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        this.props.options.map(function (option, i) {
          return React.createElement(Option, { option: option, key: i });
        })
      );
    }
  }]);

  return Options;
}(React.Component);

;

var AddOptions = function (_React$Component6) {
  _inherits(AddOptions, _React$Component6);

  function AddOptions() {
    _classCallCheck(this, AddOptions);

    return _possibleConstructorReturn(this, (AddOptions.__proto__ || Object.getPrototypeOf(AddOptions)).apply(this, arguments));
  }

  _createClass(AddOptions, [{
    key: "handleAdd",
    value: function handleAdd(e) {
      e.preventDefault();
      var option = e.target.elements.option.value;
      if (option) {
        this.props.handleAddOption(option);
      }
      e.target.elements.option.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        { onSubmit: this.handleAdd.bind(this) },
        React.createElement("input", { type: "text", name: "option" }),
        React.createElement(
          "button",
          { type: "submit" },
          "Add option"
        )
      );
    }
  }]);

  return AddOptions;
}(React.Component);

ReactDOM.render(React.createElement(IndecisionApp, null), document.querySelector('#app'));
