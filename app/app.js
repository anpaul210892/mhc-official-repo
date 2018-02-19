'use strict';

// Declare app level module which depends on views, and components
var mhcApp = angular.module('myApp', [
  'ngRoute',
  'myApp.login',
  'myApp.admin',
  'myApp.register',
  'myApp.forgotPassword',
  'myApp.profile',
  'myApp.addNewActivity',
  'myApp.version',
  'ui.tinymce'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
  .when('/login', {
         controller: 'loginCtrl',
         templateUrl: 'userComponents/login/login.html'
     })
  .when('/forgotPassword', {
      controller: 'forgotPasswordCtrl',
      templateUrl: 'userComponents/forgotPassword/forgotPassword.html'
  })
 .when('/admin', {
         controller: 'adminCtrl',
         templateUrl: 'userComponents/admin/admin.html'
     })
  .when('/register', {
      controller: 'registerCtrl',
      templateUrl: 'userComponents/register/register.html'
  })
  .when('/profile', {
    controller: 'profileCtrl',
    templateUrl: 'userComponents/profile/profile.html'
})
.when('/addNewActivity', {
    controller: 'addNewActivityCtrl',
    templateUrl: 'userComponents/addNewActivity/addNewActivity.html'
})
 .otherwise({ redirectTo: '/login' });

    var config = {
      apiKey: "AIzaSyBzn9wVQ6EBWGL_okTxi5ko9nQbrUVXETI",
      authDomain: "my-holistic-club-mhc.firebaseapp.com",
      databaseURL: "https://my-holistic-club-mhc.firebaseio.com",
      projectId: "my-holistic-club-mhc",
      storageBucket: "my-holistic-club-mhc.appspot.com",
      messagingSenderId: "839087899128"
    };
    firebase.initializeApp(config);
    window.fbAsyncInit = function() {
        FB.init({
          appId      : '535321490186187',
          cookie     : true,
          xfbml      : true,
          version    : 'v2.4'
        });
          
        FB.AppEvents.logPageView();   
          
      };
    
      (function(d, s, id){
         var js, fjs = d.getElementsByTagName(s)[0];
         if (d.getElementById(id)) {return;}
         js = d.createElement(s); js.id = id;
         js.src = "https://connect.facebook.net/en_US/sdk.js";
         fjs.parentNode.insertBefore(js, fjs);
       }(document, 'script', 'facebook-jssdk'));

}
]);
