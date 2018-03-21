( function () {
    'use strict';  
    angular.module('myApp.events', [])
    .controller('eventsCtrl', eventsCtrl);
    
    eventsCtrl.$inject = ['$scope','$location', '$filter', 'shareService'];
    function eventsCtrl($scope, $location, $filter, shareService) {
        var database = firebase.database().ref().child('events');
        database.once('value', function(snapshot){
             
            
            if(snapshot.exists()) {
                var content = '';
                snapshot.forEach(function(data){
                    var eventId= data.val().id;
                    var eventTitle = data.val().title;
                    var eventLocation = data.val().location;
                    var eventStartDate = $filter('date')(data.val().startDate, "yyyy-MM-dd");
                    var eventEndDate = $filter('date')(data.val().endDate, "yyyy-MM-dd");
                    content += '<tr>';
                    content += '<td>' + eventId + '</td>'; //column1
                    content += '<td>' + eventTitle + '</td>';//column2
                    content += '<td>' + eventLocation + '</td>';
                    content += '<td>' + eventStartDate + '</td>';
                    content += '<td>' + eventEndDate + '</td>';
                    content += '<td style="font-size:smaller;word-wrap:break-word;"><button id='+eventId+"_approve"+'>Approve</button><button id='+eventId+"_disapprove"+'>Disapprove</button><button id='+eventId+"_view"+'>View</button></td>';
                    content += '</tr>';
                });
        
                $('#ex-table').append(content);

                var keys = Object.keys(snapshot.val());

                for (var i=0; i<keys.length; i++) {
                    
                    var idApprove = document.getElementById(keys[i]+"_approve");
                    var idDisapprove = document.getElementById(keys[i]+"_disapprove");
                    var idView = document.getElementById(keys[i]+"_view");
                    
                    idApprove.addEventListener("click", function (ev) {
                        var msgArr =  this.id.split("_");
                        database.child(msgArr[0]).child("isApproved").set(true);
                    }, false);
                    
                    idDisapprove.addEventListener("click", function (ev) {
                        var msgArr =  this.id.split("_");
                        database.child(msgArr[0]).child("isApproved").set(false);
                    }, false);
                    
                    idView.addEventListener("click", function (ev) {
                        shareService.setMsg(this.id);
                        window.location.href="#/editEvent";
                    }, false);
                }

            }
        });
        
    }
})();