// Generated by CoffeeScript 1.6.2
var app;

app = angular.module('app', ['ngCookies']);

app.factory('pgp', function() {
  openpgp.init();
  return openpgp;
});

app.run(function($cookies) {
  return app.config(function($httpProvider) {
    return $httpProvider.defaults.headers.post['X-CSRFToken'] = $cookies['csrftoken'];
  });
});
