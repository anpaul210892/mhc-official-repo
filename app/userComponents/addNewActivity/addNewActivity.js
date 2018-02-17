( function () {
    'use strict';
    
    angular.module('myApp.addNewActivity', [])
    .controller('addNewActivityCtrl', addNewActivityCtrl);
    
    addNewActivityCtrl.$inject = ['$scope'];
    function addNewActivityCtrl($scope) {
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

                $scope.showTextArea=false;    
        };
        $scope.onload();
        
    }
    
})();