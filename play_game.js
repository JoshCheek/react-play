var playGame = function(render, gameState) {
  var dispatcher = new function() { };
  render({
    name:       gameState.name,
    duration:   gameState.duration,
    correct:    gameState.correct,
    incorrect:  gameState.incorrect,
    dispatcher: dispatcher
  });
}

module.exports = playGame;
