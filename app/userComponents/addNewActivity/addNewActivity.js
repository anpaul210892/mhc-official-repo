( function () {
    'use strict';
    
    angular.module('myApp.addNewActivity', [])
    .controller('addNewActivityCtrl', addNewActivityCtrl);
    
    addNewActivityCtrl.$inject = ['$scope', '$compile', '$location'];
    function addNewActivityCtrl($scope, $compile, $location) {
        var user=firebase.auth().currentUser;
        if(user) {
            $scope.onload = function(){  
                    $scope.tinymceOptions = {
                        resize: false,
                        height: 300,
                        plugins: [
                                    "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                                    "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                                    "save table contextmenu directionality emoticons template paste textcolor"
                                ],
                                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | l      ink image | print preview media fullpage | forecolor backcolor emoticons",
                    };   
            };
            $scope.onload();

            $scope.clonerow = function() {
                var $template = $('#labTemplate'),
                        $clone= $template
                                    .clone()
                                    .removeClass('hide')
                                    .removeAttr('id')
                                    .insertBefore($template);                            
                $compile($clone)($scope); 
            }; 
        
            $scope.cloneremove = function(event) {
                var $row = event.target.parentElement.parentElement.parentElement;
                $row.remove();
            };
         
            $scope.showSingleMultiple = function() {
                if ($scope.checked) {
                    $("#onetime").hide();
                    $("#mtime").show(); 
                } else {
                    $("#onetime").show();
                    $("#mtime").hide();
                }
            };

            /**rameshwar code */
            $scope.clonemon = function() {
                var $template = $('#monTemplate'),
                        $clone= $template
                                    .clone()
                                    .removeClass('hide')
                                    .removeAttr('id')
                                    .insertBefore($template);                            
                $compile($clone)($scope); 
            }; 
        
            $scope.monremove = function(event) {
                var $row = event.target.parentElement.parentElement.parentElement;
                if(!angular.element($row).hasClass('form-group')){
                    $row = $row.parentElement;
                }
                $row.remove();
            };
            
            $scope.clonetue = function() {
                var $template = $('#tueTemplate'),
                        $clone= $template
                                    .clone()
                                    .removeClass('hide')
                                    .removeAttr('id')
                                    .insertBefore($template);                            
                $compile($clone)($scope); 
            }; 
        
            $scope.tueremove = function(event) {
                var $row = event.target.parentElement.parentElement.parentElement;
                if(!angular.element($row).hasClass('form-group')){
                    $row = $row.parentElement;
                }
                $row.remove();
            };
            
            
            $scope.clonewed = function() {
                var $template = $('#wedTemplate'),
                        $clone= $template
                                    .clone()
                                    .removeClass('hide')
                                    .removeAttr('id')
                                    .insertBefore($template);                            
                $compile($clone)($scope); 
            }; 
        
            $scope.wedremove = function(event) {
                var $row = event.target.parentElement.parentElement.parentElement;
                if(!angular.element($row).hasClass('form-group')){
                    $row = $row.parentElement;
                }
                $row.remove();
            };
            
            
            $scope.clonethu = function() {
                var $template = $('#thuTemplate'),
                        $clone= $template
                                    .clone()
                                    .removeClass('hide')
                                    .removeAttr('id')
                                    .insertBefore($template);                            
                $compile($clone)($scope); 
            }; 
        
            $scope.thuremove = function(event) {
                var $row = event.target.parentElement.parentElement.parentElement;
                if(!angular.element($row).hasClass('form-group')){
                    $row = $row.parentElement;
                }
                $row.remove();
            };
            
            
            $scope.clonefri = function() {
                var $template = $('#friTemplate'),
                        $clone= $template
                                    .clone()
                                    .removeClass('hide')
                                    .removeAttr('id')
                                    .insertBefore($template);                            
                $compile($clone)($scope); 
            }; 
        
            $scope.friremove = function(event) {
                var $row = event.target.parentElement.parentElement.parentElement;
                if(!angular.element($row).hasClass('form-group')){
                    $row = $row.parentElement;
                }
                $row.remove();
            };
            
            
            $scope.clonesat = function() {
                var $template = $('#satTemplate'),
                        $clone= $template
                                    .clone()
                                    .removeClass('hide')
                                    .removeAttr('id')
                                    .insertBefore($template);                            
                $compile($clone)($scope); 
            }; 
        
            $scope.satremove = function(event) {
                var $row = event.target.parentElement.parentElement.parentElement;
                if(!angular.element($row).hasClass('form-group')){
                    $row = $row.parentElement;
                }
                $row.remove();
            };
            
            $scope.clonesun = function() {
                var $template = $('#sunTemplate'),
                        $clone= $template
                                    .clone()
                                    .removeClass('hide')
                                    .removeAttr('id')
                                    .insertBefore($template);                            
                $compile($clone)($scope); 
            }; 
        
            $scope.sunremove = function(event) {
                var $row = event.target.parentElement.parentElement.parentElement;
                if(!angular.element($row).hasClass('form-group')){
                    $row = $row.parentElement;
                }
                $row.remove();
            };
            
            $scope.clonedate = function() {
                var $template = $('#dateTemplate'),
                        $clone= $template
                                    .clone()
                                    .removeClass('hide')
                                    .removeAttr('id')
                                    .insertBefore($template);                            
                $compile($clone)($scope); 
            }; 
        
            $scope.dateremove = function(event) {
                var $row = event.target.parentElement.parentElement.parentElement;
                $row.remove();
            };
            /**code end */

            $scope.logout = function() {
                firebase.auth().signOut().then(function() {
                    window.location.href="#/login";
                }, function(error) {
                    
                });
            }
            $scope.logoClick = function(){
                $location.path("/admin");
            }
            $scope.redirectToProfile = function(){
                $location.path("/profile");
            };
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
            $location.path("/login");
        }
    }
    
})();