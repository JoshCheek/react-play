var App      = require("./app");
var ReactDOM = require("react-dom");

module.exports = function($dom, appState) {
  var reactRender = (view) => ReactDOM.render(view, $dom);
  new App(reactRender, appState).run();
}
