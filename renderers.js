var main     = require('./components')
var React    = require("react");
var ReactDOM = require("react-dom");

module.exports = {
  example: function($example) {
    // React toplevel methods:
    // https://facebook.github.io/react/docs/top-level-api.html
    var example = React.createElement(main.Example, null); // component, props, [children ...]
    ReactDOM.render(example, $example);
  }
}
