( function () {
    'use strict';
    
    angular.module('myApp.forgotPassword', [])
    .controller('forgotPasswordCtrl', forgotPasswordCtrl);
    
    forgotPasswordCtrl.$inject = ['$scope','$location'];
    function forgotPasswordCtrl($scope, $location) {
        
        $scope.forgotPassword = function() {
            firebase.auth().sendPasswordResetEmail($scope.email);
            $location.path("/login");
        };  
    }
})();