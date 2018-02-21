( function () {
    'use strict';
    
    angular.module('myApp.profile', [])
    .controller('profileCtrl', profileCtrl);

    profileCtrl.$inject = ['$scope','$location'];
    function profileCtrl($scope, $location) {
        var user=firebase.auth().currentUser;
        if(user) {
            $scope.logout = function() {
                firebase.auth().signOut().then(function() {
                    window.location.href="#/login";
                }, function(error) {
                    
                });
            };

            $scope.redirecttoAddNewActivity = function(){
                $location.path("/addNewActivity");
            };
            $scope.logoClick = function(){
                $location.path("/admin");
            }
            $scope.changeSideBar = function(device){
                if(device === 'desktop') {
                    if ($("body").hasClass("mini-sidebar")) {
                        $("body").trigger("resize");
                        $(".scroll-sidebar, .slimScrollDiv").css("overflow", "hidden").parent().css("overflow", "visible");
                        $("body").removeClass("mini-sidebar");
                        $('.navbar-brand span').show();
                        //$(".sidebartoggler i").addClass("ti-menu");
                    } else {
                        $("body").trigger("resize");
                        $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
                        $("body").addClass("mini-sidebar");
                        $('.navbar-brand span').hide();
                        //$(".sidebartoggler i").removeClass("ti-menu");
                    }
                } else {
                        $("body").toggleClass("show-sidebar");
                        $(".nav-toggler i").toggleClass("ti-menu");
                        $(".nav-toggler i").addClass("ti-close");
                }
            };
            $scope.redirecttoAmin = function() {
                $location.path("/admin");
            }
        }else{
            window.location.href="#/login";
        }

    }
})();