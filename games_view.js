// A list of tags / attributes you can use:
// https://facebook.github.io/react/docs/tags-and-attributes.html
var React = require('react');

var GamesView = React.createClass({
  render: function() {
    var gameViews = this.props.games.map((game) => {
      return <li>{game.name}</li>;
    });
    return <ul>{gameViews}</ul>;
  }
});

module.exports = GamesView;
