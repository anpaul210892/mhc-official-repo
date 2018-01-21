( function () {
'use strict';

angular.module('myApp.login', ['ngRoute'])
.component( 'login', {
    templateUrl: 'userComponents/login/login.html',
    controller: loginCtrl
})
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/login', {
    templateUrl: 'userComponents/login/login.html',
    controller: loginCtrl
  });
}]);

loginCtrl.$inject = ['$scope'];
function loginCtrl($scope) {
    var database = firebase.database();
    $scope.signFirst=true;
    $scope.signSecond=false;
    $scope.invalidUser = false;
    $scope.showBtn = false;
    $scope.passwordMismatch = false;
    $scope.checkDetails = function() {
        
        if(!$scope.email || !$scope.password || !$scope.cnfrmpassword || $scope.cnfrmpassword!=$scope.password) {
            $scope.passwordMismatch = true;
        }else {
            if(firebase.auth().currentUser===null){
                $('.signup-form').slideUp();
                $('.welcome-form').removeClass('xxx');
                $('.welcome-form').slideDown();
            }else{
                var userId = firebase.auth().currentUser.uid;
                firebase.database().ref('/mhcUsers/' + userId).once('value').then(function(snapshot) {
                    if(snapshot.val().email === $scope.email){
                        $('.signup-section').addClass('section-close');
                        $('.signup-section').removeClass('section-open');
                        $('.login-section').addClass('section-open');
                        $('.login-section').removeClass('section-close');
                        $('.login-page_input').addClass('hide-placeholder');
                    }else{
                        $('.signup-form').slideUp();
                        $('.welcome-form').removeClass('xxx');
                        $('.welcome-form').slideDown();
                    }
            
        }, function(error) {
            $('.signup-form').slideUp();
            $('.welcome-form').removeClass('xxx');
            $('.welcome-form').slideDown(); 
        });
    }
    }
}
    

    $scope.signUp = function() {
        firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).then(function(user) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    function loginRedirect() {
                        $('.signup-section').addClass('section-close');
                        $('.signup-section').removeClass('section-open');
                        $('.login-section').addClass('section-open');
                        $('.login-section').removeClass('section-close');
                        $('.login-page_input').addClass('hide-placeholder');
                    }
                  // User is signed in.
                  var displayName = user.displayName;
                  var email = user.email;
                  var emailVerified = user.emailVerified;
                  var photoURL = user.photoURL;
                  var isAnonymous = user.isAnonymous;
                  var uid = user.uid;
                  var providerData = user.providerData;
                  //console.log(uniqueEmail);
                  database.ref('/mhcUsers/' + uid).set({
                      email: $scope.email,
                      name: $scope.name,
                      phone: $scope.phone,
                      whatsappNo: $scope.whatsappNo,
                      profession: $scope.profession,
                      dob: $scope.dob,
                      gender: $scope.gender,
                      address: $scope.address,
                      city: $scope.city,
                      state: $scope.state,
                      zipCode: $scope.zipCode,
                      accessRole: "customer"
                    });
                    loginRedirect();
                }
                
            })
        },function(error) {  
        
        });
        
    }

     $scope.login = function(){
        firebase.auth().signInWithEmailAndPassword($scope.email, $scope.password).then(function(user) {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                  // User is signed in.
                  var displayName = user.displayName;
                  var email = user.email;
                  var emailVerified = user.emailVerified;
                  var photoURL = user.photoURL;
                  var isAnonymous = user.isAnonymous;
                  var uid = user.uid;
                  var providerData = user.providerData;
                  //console.log(uniqueEmail);
                  window.location.href="userComponents/customerLogin/customerLogin.html";
                } else {
                  // User is signed out.
                  // ...
                }
              });
        }, function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if(errorCode==='auth/wrong-password'){
                $scope.invalidUser = true;
            }
           
        });
     }

     $('.login-section').on('click', function () {
        $(this).addClass('section-open');
        $('.login-section').removeClass('section-close');
        $('.signup-section').addClass('section-close');
        $('.signup-section').removeClass('section-open');
    });

    $('.signup-section').on('click', function () {
        $(this).addClass('section-open');
        $('.signup-section').removeClass('section-close');
        $('.login-section').addClass('section-close');
        $('.login-section').removeClass('section-open');
        $('.login-form').slideDown();
        $('.forget-form').slideUp();
    });

    ////// custom placeholder

    $('.login-page_input').on('change', function () {
        var input = $(this);
        if (input.val().length) {
            input.addClass('hide-placeholder');
        } else {
            input.removeClass('hide-placeholder');
        }
    });
    
    //// forget password

    $('.login-page_forget a').on('click', function (e) {
        e.preventDefault();
        $('.login-form').slideUp();
        $('.forget-form').slideDown();
    });

}

})();