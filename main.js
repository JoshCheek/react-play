var main = function(render, appState) {
  if(!appState.games) {
    appState.games = [];
  }
  render({data: appState});
}

module.exports = main;
