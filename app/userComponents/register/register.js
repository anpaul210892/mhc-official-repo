( function () {
    'use strict';
    
    angular.module('myApp.register', [])
    .controller('registerCtrl', registerCtrl);

    registerCtrl.$inject = ['$scope'];
    function registerCtrl($scope) {
        var database = firebase.database();
        $scope.checkDisabled = function(){
            if($scope.loginform.password_c.$$success.noMatch && $scope.loginform.password.$valid && $scope.loginform.email.$valid && $scope.loginform.username
                .$valid){
                return false;
            }else{
                return true; 
            }
        }   
        $scope.signUp = function() {
            firebase.auth().createUserWithEmailAndPassword($scope.formData.email, $scope.formData.password).then(function(user) {
                firebase.auth().onAuthStateChanged(function(user) {
                    if (user) {
                        var email = user.email;
                        var uid = user.uid;
                        user.updateProfile({
                            displayName: $scope.formData.username
                        }).then(function() {
                            // Update successful.
                        }, function(error) {
                            // An error happened.
                        });
                        database.ref('/mhcUsers/' + uid).set({
                            email: $scope.formData.email,
                            name: $scope.formData.username,
                            phone: "",
                            whatsappNo: "",
                            profession: "",
                            dob: "",
                            gender: "",
                            address: "",
                            city: "",
                            state: "",
                            zipCode: "",
                            accessRole: "customer"
                        });
                        
                        user.sendEmailVerification().then(function() {
                          // Email sent.
                        }).catch(function(error) {
                          // An error happened.
                        });
                        window.location.href="#/login"
                        }
                    })   
                }, function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if(errorCode === "auth/email-already-in-use") {
                        $scope.inUseEmail=true;
                    } else {
                        $scope.invalidUser = true;
                    }  
                });
        }
    }
})();