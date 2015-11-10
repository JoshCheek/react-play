var playGame = function(render, gameState) {
  var sequence = [];
  var dispatcher = function(type, data) {
    window.key = data;
    console.log({
      altKey:                 data.altKey,
      charCode:               data.charCode,
      ctrlKey:                data.ctrlKey,
      key:                    data.key,
      keyCode:                data.keyCode,
      locale:                 data.locale,
      location:               data.location,
      metaKey:                data.metaKey,
      repeat:                 data.repeat,
      shiftKey:               data.shiftKey,
      which:                  data.which,
    });
  };
  render({
    name:       gameState.name,
    duration:   gameState.duration,
    correct:    gameState.correct,
    incorrect:  gameState.incorrect,
    dispatcher: dispatcher
  });
}

module.exports = playGame;
