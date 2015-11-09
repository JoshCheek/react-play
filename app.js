var main     = require('./components')
var React    = require("react");
var ReactDOM = require("react-dom");

var App = function($dom, state) {
  this.$dom  = $dom;
  this.state = state;
}

App.prototype = {
  run: function() {
    // React toplevel methods:
    // https://facebook.github.io/react/docs/top-level-api.html
    var view = React.createElement(main.App, null); // component, props, [children ...]
    ReactDOM.render(view, this.$dom);
  }
}

module.exports = App;
