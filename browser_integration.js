var main        = require("./main");
var playGame    = require("./play_game");
var React       = require("react");
var ReactDOM    = require("react-dom");

var reactRender = $dom => viewClass => props => {
  view = React.createElement(viewClass, props);
  ReactDOM.render(view, $dom);
}

// A list of tags / attributes you can use:
// https://facebook.github.io/react/docs/tags-and-attributes.html
var GamesView = React.createClass({
  render: function() {
    var gameViews = this.props.data.games.map((game) => {
      return <li>{game.name}</li>;
    });
    return <ul>{gameViews}</ul>;
  }
});

var PlayGameView = React.createClass({
  render: function() {
    var keyPress = (e) => this.props.dispatcher('keyPress', e);
    return <div className="playGame" autoFocus={true} tabIndex="-1" onKeyDown={keyPress} >
      <div className="stats">
        <div className="gameName">  {this.props.name}      </div>
        <div className="duration">  {this.props.duration}  </div>
        <div className="correct">   {this.props.correct}   </div>
        <div className="incorrect"> {this.props.incorrect} </div>
      </div>
      <div className="display">
      </div>
    </div>;
  }
});


module.exports = {
  main: ($dom, appState) => main(
    reactRender($dom)(GamesView),
    appState
  ),
  game: ($dom, gameState) => playGame(
    reactRender($dom)(PlayGameView),
    gameState
  ),
}
