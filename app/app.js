'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider.otherwise({redirectTo: '/login'});

    var config = {
      apiKey: "AIzaSyBzn9wVQ6EBWGL_okTxi5ko9nQbrUVXETI",
      authDomain: "my-holistic-club-mhc.firebaseapp.com",
      databaseURL: "https://my-holistic-club-mhc.firebaseio.com",
      projectId: "my-holistic-club-mhc",
      storageBucket: "my-holistic-club-mhc.appspot.com",
      messagingSenderId: "839087899128"
    };
    firebase.initializeApp(config);

}]);
