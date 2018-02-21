( function () {
    'use strict';
    
    angular.module('myApp.login', [])
    .controller('loginCtrl', loginCtrl);
    
    loginCtrl.$inject = ['$scope', '$remember', '$location','$timeout','$rootScope', '$sce'];
    function loginCtrl($scope, $remember, $location, $timeout, $rootScope, $sce) {
        var firebaseInitial=firebase.auth();
        $scope.emailNotVerified = false;
        $scope.remember = false;
        if ($remember('username') && $remember('password') ) {
            $scope.remember = true;
            $scope.email = $remember('username');
            $scope.password = $remember('password');
        }
        $scope.rememberMe = function() {
            if ($scope.remember) {
                $remember('username', $scope.email);
                $remember('password', $scope.password);
            } else {
                $remember('username', '');
                $remember('password', '');
            }
        };
         

        $scope.redictToForgot = function() {
            $location.path("/forgotPassword");
        }

        $scope.redictToRegister = function() {
            $location.path("/register");
        }

    //     $scope.signFirst=true;
    //     $scope.signSecond=false;
    //     $scope.invalidUser = false;
    //     $scope.showBtn = false;
    //     $scope.passwordMismatch = false;
    //     $scope.checkDetails = function() {
            
    //         if(!$scope.email || !$scope.password || !$scope.cnfrmpassword || $scope.cnfrmpassword!=$scope.password) {
    //             $scope.passwordMismatch = true;
    //         }else {
    //             if(firebase.auth().currentUser===null){
    //                 // $('.signup-form').slideUp();
    //                 // $('.welcome-form').removeClass('xxx');
    //                 // $('.welcome-form').slideDown();
    //             }else{
    //                 var userId = firebase.auth().currentUser.uid;
    //                 firebase.database().ref('/mhcUsers/' + userId).once('value').then(function(snapshot) {
    //                     if(snapshot.val().email === $scope.email){
    //                         // $('.signup-section').addClass('section-close');
    //                         // $('.signup-section').removeClass('section-open');
    //                         // $('.login-section').addClass('section-open');
    //                         // $('.login-section').removeClass('section-close');
    //                         // $('.login-page_input').addClass('hide-placeholder');
    //                     }else{
    //                         // $('.signup-form').slideUp();
    //                         // $('.welcome-form').removeClass('xxx');
    //                         // $('.welcome-form').slideDown();
    //                     }
                
    //         }, function(error) {
    //             // $('.signup-form').slideUp();
    //             // $('.welcome-form').removeClass('xxx');
    //             // $('.welcome-form').slideDown(); 
    //         });
    //     }
    //     }
    // }
        
    
    //     $scope.signUp = function() {
    //         firebase.auth().createUserWithEmailAndPassword($scope.email, $scope.password).then(function(user) {
    //             firebase.auth().onAuthStateChanged(function(user) {
    //                 if (user) {
    //                   var displayName = user.displayName;
    //                   var email = user.email;
    //                   var emailVerified = user.emailVerified;
    //                   var photoURL = user.photoURL;
    //                   var isAnonymous = user.isAnonymous;
    //                   var uid = user.uid;
    //                   var providerData = user.providerData;
    //                   //console.log(uniqueEmail);
    //                   database.ref('/mhcUsers/' + uid).set({
    //                       email: $scope.email,
    //                       name: $scope.name,
    //                       phone: $scope.phone,
    //                       whatsappNo: $scope.whatsappNo,
    //                       profession: $scope.profession,
    //                       dob: $scope.dob,
    //                       gender: $scope.gender,
    //                       address: $scope.address,
    //                       city: $scope.city,
    //                       state: $scope.state,
    //                       zipCode: $scope.zipCode,
    //                       accessRole: "customer"
    //                     });
    //                     loginRedirect();
    //                 }
                    
    //             }})
    //         },function(error) {  
            
    //         });
            
    //     }
    $scope.checkLoginState=function(){
        FB.getLoginStatus(function(response) {
          statusChangeCallback(response);
        });
    };
    $scope.onSignIn = function(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      };
        $scope.login = function() {
            firebaseInitial.signInWithEmailAndPassword($scope.email, $scope.password).then(function(user) {
                if(user.emailVerified === false){
                    firebase.database().ref('/mhcUsers/' + user.uid).once('value').then(function(snapshot) {
                        $rootScope.user =  snapshot.val();
                        $rootScope.user.addressMapUrl=$sce.trustAsResourceUrl("https://www.google.com/maps?q=["+$rootScope.user.address+" "+$rootScope.user.zipCode+"]&output=embed");                        
                      });
                    $location.path("/admin");
                } else {
                    $scope.emailNotVerified = true;
                    $timeout( function(){
                        $scope.emailNotVerified = false;
                    }, 3000 );
                    
                }
            }, function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                    $scope.invalidUser = true;
            });
        };
    
    }
    
    })();