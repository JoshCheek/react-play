var React     = require("react");
var GamesView = require('./games_view')

var App = function(reactRender, appState) {
  this._reactRender = reactRender;
  this._appState    = appState;
  if(!this._appState.games) {
    this._appState.games = [];
  }
}

App.prototype = {
  run: function() {
    var dispatcher = new function() { };

    this._view = React.createElement(GamesView, {games: this._appState.games});
    this._reactRender(this._view);
  }
}

module.exports = App;
