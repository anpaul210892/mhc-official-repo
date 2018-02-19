( function () {
    'use strict';
    
    angular.module('myApp.addNewActivity', [])
    .controller('addNewActivityCtrl', addNewActivityCtrl);
    
    addNewActivityCtrl.$inject = ['$scope', '$compile'];
    function addNewActivityCtrl($scope, $compile) {
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
         }
    }
    
})();