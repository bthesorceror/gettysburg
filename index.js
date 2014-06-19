var EventEmitter = require('events').EventEmitter;

module.exports = (function(history) {
  var pushState = history.pushState;
  var emitter   = new EventEmitter();

  history.pushState = function(state, title, location) {
    pushState.apply(history, arguments);
    emitter.emit('pushState', location);
  }

  return emitter;
})(window.history);
