var test = require('tape');
var h    = require('../index');

test('emits event on history pushState', function(t) {
  t.plan(1);

  h.once('pushState', function(location) {
    t.equal(location, '/person/of/interest', 'emitted event with correct arguments');
  });

  history.pushState(history.state, 'TITLE', '/person/of/interest');

  t.on('end', function() {
    h.removeAllListeners();
  })
});

test('changes the browser location', function(t) {
  t.plan(1);

  history.pushState(history.state, 'TITLE', '/person/of/interest');

  t.equal(window.location.pathname, '/person/of/interest', 'correct browser location');
});
