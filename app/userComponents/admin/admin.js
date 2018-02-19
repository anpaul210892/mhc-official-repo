( function () {
    'use strict';
    
    angular.module('myApp.admin', [])
    .controller('adminCtrl', adminCtrl);
    
    adminCtrl.$inject = ['$scope','$location'];
    function adminCtrl($scope, $location) {
        var user=firebase.auth().currentUser;
        if(user) {
            $scope.onloadClasses = function() {
                var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
                var topOffset = 70;
                if (width < 1170) {
                    $("body").addClass("mini-sidebar");
                    $('.navbar-brand span').hide();
                    $(".scroll-sidebar, .slimScrollDiv").css("overflow-x", "visible").parent().css("overflow", "visible");
                    $(".sidebartoggler i").addClass("ti-menu");
                }
                else {
                    $("body").removeClass("mini-sidebar");
                    $('.navbar-brand span').show();
                    //$(".sidebartoggler i").removeClass("ti-menu");
                }
                
                var height = ((window.innerHeight > 0) ? window.innerHeight : this.screen.height) - 1;
                height = height - topOffset;
                if (height < 1) height = 1;
                if (height > topOffset) {
                    $(".page-wrapper").css("min-height", (height) + "px");
                }
                $(".fix-header .topbar").stick_in_parent({});
            };
            $scope.onloadClasses();
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
            $scope.logoClick = function(){
                $location.path("/admin");
            }
            $scope.redirecttoAddNewActivity = function(){
                $location.path("/addNewActivity");
            };
            $scope.redirectToProfile = function(){
                $location.path("/profile");
            };
            $scope.logout = function() {
                firebase.auth().signOut().then(function() {
                    window.location.href="#/login";
                }, function(error) {
                    
                });
            };
        } else {
            window.location.href="#/login";
        }
}
    
})();