( function () {
    'use strict';
    
    angular.module('myApp.addNewActivity', [])
    .controller('addNewActivityCtrl', addNewActivityCtrl);
    
    addNewActivityCtrl.$inject = ['$scope', '$location'];
    function addNewActivityCtrl($scope, $location) {
        var user=firebase.auth().currentUser;
        if(user) {
            $scope.onload = function() {  
                    $scope.tinymceOptions = {
                        resize: false,
                        height: 300,
                        plugins: [
                                    "advlist autolink link image lists charmap print preview hr anchor pagebreak spellchecker",
                                    "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking",
                                    "save table contextmenu directionality emoticons template paste textcolor"
                                ],
                                toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | print preview media fullpage | forecolor backcolor emoticons",
                    };
                    firebase.database().ref('/eventTypes/').once('value').then(function(snapshot) {
                        $scope.eventTypes =  snapshot.val();
                        $scope.eventType = $scope.eventTypes[0];                       
                    });
                    $scope.eventTags=[];
                    $scope.eventDescriptions = [{
                          "Label": "",
                          "Text": ""
                        }];
                    $scope.passVariants = [{
                        "Label":"",
                        "memberPrice":"",
                        "nonMemberPrice":"",
                        "minBooking":"",
                        "maxBooking":""
                    }];
                    $scope.monSlots = [{
                        "startTime": "",
                        "endTime": ""
                    }];
                    $scope.tueSlots = [{
                        "startTime": "",
                        "endTime": ""
                    }];
                    $scope.wedSlots = [{
                        "startTime": "",
                        "endTime": ""
                    }];
                    $scope.thuSlots = [{
                        "startTime": "",
                        "endTime": ""
                    }];
                    $scope.friSlots = [{
                        "startTime": "",
                        "endTime": ""
                    }];
                    $scope.satSlots = [{
                        "startTime": "",
                        "endTime": ""
                    }];
                    $scope.sunSlots = [{
                        "startTime": "",
                        "endTime": ""
                    }];
                    $scope.multiChecked = false;
                    $scope.oneTime = true;
                    $scope.cancelChecked =  false;
                    $scope.transportationAvailed = false;
                    $scope.eventID=(Math.floor(Math.random() * (1000000)) + 1) ; 
            };
            $scope.onload();

            $scope.clonerow = function() {
                var itemToClone = { "Label": "", "Text": "" };
                $scope.eventDescriptions.push(itemToClone);  
            }; 
        
            $scope.cloneremove = function(itemIndex) {
                $scope.eventDescriptions.splice(itemIndex, 1);
            };
         
            $scope.showSingleMultiple = function() {
                if ($scope.multiChecked) {
                    $scope.oneTime = false;
                } else {
                    $scope.oneTime = true;
                }
            };

            $scope.clonemon = function() {
                var itemToClone = { "startTime": "", "endTime": "" };
                $scope.monSlots.push(itemToClone);
            }; 
        
            $scope.monremove = function(itemIndex) {
                $scope.monSlots.splice(itemIndex, 1);
            };
            
            $scope.clonetue = function() {
                var itemToClone = { "startTime": "", "endTime": "" };
                $scope.tueSlots.push(itemToClone); 
            }; 
        
            $scope.tueremove = function(itemIndex) {
                $scope.tueSlots.splice(itemIndex, 1);
            };

            $scope.clonewed= function() {
                var itemToClone = { "startTime": "", "endTime": "" };
                $scope.wedSlots.push(itemToClone); 
            }; 
        
            $scope.wedremove = function(itemIndex) {
                $scope.wedSlots.splice(itemIndex, 1);
            };
            
            $scope.clonethu= function() {
                var itemToClone = { "startTime": "", "endTime": "" };
                $scope.thuSlots.push(itemToClone); 
            }; 
        
            $scope.thuremove = function(itemIndex) {
                $scope.thuSlots.splice(itemIndex, 1);
            };
            
            $scope.clonefri= function() {
                var itemToClone = { "startTime": "", "endTime": "" };
                $scope.friSlots.push(itemToClone); 
            }; 
        
            $scope.friremove = function(itemIndex) {
                $scope.friSlots.splice(itemIndex, 1);
            };

            $scope.clonesat= function() {
                var itemToClone = { "startTime": "", "endTime": "" };
                $scope.satSlots.push(itemToClone); 
            }; 
        
            $scope.satremove = function(itemIndex) {
                $scope.satSlots.splice(itemIndex, 1);
            };
            
            $scope.clonesun= function() {
                var itemToClone = { "startTime": "", "endTime": "" };
                $scope.sunSlots.push(itemToClone); 
            }; 
        
            $scope.sunremove = function(itemIndex) {
                $scope.sunSlots.splice(itemIndex, 1);
            };

            $scope.clonePass = function() {
                var itemToClone = {
                    "Label":"",
                    "memberPrice":"",
                    "nonMemberPrice":"",
                    "minBooking":"",
                    "maxBooking":""
                };
                $scope.passVariants.push(itemToClone); 
            }; 
        
            $scope.passremove = function(itemIndex) {
                $scope.passVariants.splice(itemIndex, 1); 
            };

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

            $scope.GetLocation = function() {
                var width=document.getElementById("map-box").offsetWidth;
                document.getElementById("map").style.width = width;
                document.getElementById("map").style.height = "200px";
                var map;
                var geocoder = new google.maps.Geocoder();
                var address = $scope.eventLocation;
                geocoder.geocode({ 'address': address }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        var latitude = results[0].geometry.location.lat();
                        var longitude = results[0].geometry.location.lng();
                        var myLatLng = {lat: latitude, lng: longitude};
                        map = new google.maps.Map(document.getElementById('map'), {
                            center: myLatLng,
                            zoom: 14                    
                          });
                                  
                          var marker = new google.maps.Marker({
                            position: myLatLng,
                            map: map,
                            title: latitude + ', ' + longitude 
                          });
                    } else {
                        alert("Request failed.")
                    }
                });
            };
            $scope.redirecttoAmin = function() {
                $location.path("/admin");
            };
            var imageurl, 
            imageurlone,
            imageurltwo,
            imageurlthree;
            var fileButton = document.getElementById('fileButton');
            fileButton.addEventListener('change', function (e) {
                $scope.displayImageshow = true;
                //get file
      
                var file = e.target.files[0];
                var filesize = file.size / 1024;
                
                var header_img = "header_img"
      
                var storageRef = firebase.storage().ref('events/'+$scope.eventID+'/' + header_img);
      
                //console.log("image",storageRef);
                var imgdata = storageRef.location.path_;
                //console.log("image data",imgdata);
      
                var filetype = e.target.files[0].type;
                //console.log(filetype);
      
                var _URL = window.URL;
                var ratio;
      
                var img = new Image();
                img.onload = function () {
                  ratio = this.width / this.height;
                };
                
                img.src = _URL.createObjectURL(file);
      
                //upload file
      
                var size = 1024.00;
      
                if (filesize < size && filetype == "image/jpeg" || filetype == "image/jpg" || filetype == "image/png" && 1.49 < ratio && ratio < 1.51) {
      
                  var task = storageRef.put(file).then(function (snapshot) {
                    console.log('Uploaded an image!');
                    console.log(snapshot.metadata.downloadURLs[0]);
                    imageurl = snapshot.metadata.downloadURLs[0];
                    $('#displayImage').attr('src', imageurl);
                    $('#displayImage').css('height', '300px');
                    //$('#imagehide').val(imageurl);
                  });

                } else {
                  alert("Please check image size it should be below 1mb or check image type");
                }
      
              });
              var carousel_one = document.getElementById('carousel1');
              carousel_one.addEventListener('change', function (e) {
                $scope.carousel1show = true;
                //get file
      
                var file = e.target.files[0];
                var filesize = file.size / 1024;
                console.log("file", filesize);
      
                // console.log(e.target.files[0].type);
                // var filetype = file.type
      
                //var date = new Date();
                var carousel_key_one = "carousel1";
      
                //create storage ref
                var storageRef = firebase.storage().ref('events/'+$scope.eventID+'/' + carousel_key_one);
                //console.log(storageRef.location.path_);
                console.log("image", storageRef);
                var imgdata = storageRef.location.path_;
                console.log("image data", imgdata);
      
                var filetype = e.target.files[0].type;
                console.log(filetype);
      
                var _URL = window.URL;
                var ratio;
                var img = new Image();
                img.onload = function () {
                  ratio = this.width / this.height;
                };
                img.src = _URL.createObjectURL(file);
      
      
                //upload file
      
                var size = 1024.00;
      
                if (filesize < size && filetype == "image/jpeg" || filetype == "image/jpg" || filetype == "image/png" && 1.49 < ratio && ratio < 1.51) {
      
                  var task = storageRef.put(file).then(function (snapshot) {
                    console.log('Uploaded an image!');
      
                    imageurlone = snapshot.metadata.downloadURLs[0];
                    console.log("c1", imageurlone);
                    $('#carouselone').attr('src', imageurlone);
                    $('#carouselone').css('height', '300px');
                    //$('#imagehide1').val(imageurl);
                  });
      
                } else {
                  alert("Please check image size it should be below 1mb or check image type");
                }
      
              });
              
              var carousel_two = document.getElementById('carousel2');
              carousel_two.addEventListener('change', function (e) {
                $scope.carousel2show = true;
                //get file
      
                var file = e.target.files[0];
                var filesize = file.size / 1024;
                console.log("file", filesize);
      
                // console.log(e.target.files[0].type);
                // var filetype = file.type
      
                var carousel_key_two = "carousel2";
      
                //create storage ref
                var storageRef = firebase.storage().ref('events/'+$scope.eventID+'/' + carousel_key_two);
                //console.log(storageRef.location.path_);
                console.log("image", storageRef);
                var imgdata = storageRef.location.path_;
                console.log("image data", imgdata);
      
                var filetype = e.target.files[0].type;
                console.log(filetype);
      
                var _URL = window.URL;
                var ratio;
                var img = new Image();
                img.onload = function () {
                  ratio = this.width / this.height;           
                };
                img.src = _URL.createObjectURL(file);
      
                //upload file
      
                var size = 1024.00;
      
                if (filesize < size && filetype == "image/jpeg" || filetype == "image/jpg" || filetype == "image/png" && 1.49 < ratio && ratio < 1.51) {
      
                  var task = storageRef.put(file).then(function (snapshot) {
                    console.log('Uploaded an image!');
                    imageurltwo = snapshot.metadata.downloadURLs[0];
                    console.log("c2", imageurltwo);
                    $('#carouseltwo').attr('src', imageurltwo);
                    $('#carouseltwo').css('height', '300px');
                  });
      
                } else {
                  alert("Please check image size it should be below 1mb or check image type");
                }
      
              });
              var carousel_three = document.getElementById('carousel3');
              carousel_three.addEventListener('change', function (e) {
                $scope.carousel3show = true;
                //get file
      
                var file = e.target.files[0];
                var filesize = file.size / 1024;
                console.log("file", filesize);
      
                // console.log(e.target.files[0].type);
                // var filetype = file.type
      
                var carousel_key_three = "carousel3";
      
                //create storage ref
                var storageRef = firebase.storage().ref('events/'+$scope.eventID+'/' + carousel_key_three);
                //console.log(storageRef.location.path_);
                console.log("image", storageRef);
                var imgdata = storageRef.location.path_;
                console.log("image data", imgdata);
      
                var filetype = e.target.files[0].type;
                console.log(filetype);
      
                var _URL = window.URL;
                var ratio;
                var img = new Image();
                img.onload = function () {
                  ratio = this.width / this.height;
                };
      
                //upload file
      
                var size = 1024.00;
      
                if (filesize < size && filetype == "image/jpeg" || filetype == "image/jpg" || filetype == "image/png" && 1.49 < ratio && ratio < 1.51) {
      
                  var task = storageRef.put(file).then(function (snapshot) {
                    console.log('Uploaded an image!');
                    imageurlthree = snapshot.metadata.downloadURLs[0];
                    console.log("c3", imageurlthree);
                    $('#carouselthree').attr('src', imageurlthree);
                    $('#carouselthree').css('height', '300px');
      
                  });
      
      
                } else {
                  alert("Please check image size it should be below 1mb or check image type");
                }
      
              });
              $scope.canceldisplayImage = function(){
                imageurl = ""
                $scope.displayImageshow = false;
              };
              
              $scope.cancelCarousel1 = function(){
                imageurlone = ""
                $scope.carousel1show = false;
              };

              $scope.cancelCarousel2 = function(){
                imageurltwo = ""
                $scope.carousel2show = false;
              };

              $scope.cancelCarousel3 = function(){
                imageurlthree = ""
                $scope.carousel3show = false;
              };

              $scope.reset = function(){
                $scope.onload();
                $scope.canceldisplayImage();
                $scope.cancelCarousel1();
                $scope.cancelCarousel2();
                $scope.cancelCarousel3();
              }

            $scope.submit = function() {
                console.log("eventDescriptions",$scope.eventDescriptions);
                console.log("passVariants",$scope.passVariants);
                console.log("eventTags",$scope.eventTags);
                console.log("monSlots",$scope.monSlots);
                console.log("tueSlots",$scope.tueSlots); 
                console.log("wedSlots",$scope.wedSlots); 
                console.log("thuSlots",$scope.thuSlots); 
                console.log("friSlots",$scope.friSlots); 
                console.log("satSlots",$scope.satSlots); 
                console.log("sunSlots",$scope.sunSlots); 
                console.log("cancelChecked",$scope.cancelChecked);
                console.log("transportationAvailed",$scope.transportationAvailed);
                console.log("eventType",$scope.eventType);
                console.log("multiChecked", $scope.multiChecked);
                console.log("eventTitle", $scope.eventTitle);
                console.log("eventLocation", $scope.eventLocation);
                console.log("eventShortDescription", $scope.eventShortDescription);
                console.log("headerImg", $scope.headerImg);
                console.log("singlestartDate",$scope.singlestartDate);
                console.log("singleEndDate",$scope.singleEndDate);
                console.log("multipleStartDate",$scope.multipleStartDate);
                console.log("multipleEndDate",$scope.multipleEndDate);
                console.log("monCheck",$scope.monCheck);
                console.log("tueCheck",$scope.tueCheck);
                console.log("wedCheck",$scope.wedCheck);
                console.log("thuCheck",$scope.thuCheck);
                console.log("friCheck",$scope.friCheck);
                console.log("satCheck",$scope.satCheck);
                console.log("sunCheck",$scope.sunCheck);
                console.log("eventID",$scope.eventID);
                firebase.database().ref('events/' + $scope.eventID).set({
                    id: $scope.eventID,
                    title:$scope.eventTitle,
                    eventType:$scope.eventType,
                    location:$scope.eventLocation,
                    tags:$scope.eventTags,
                    isCancellable:$scope.cancelChecked,
                    transportationProvided: $scope.transportationAvailed
                  });
                  firebase.database().ref('events/').child($scope.eventID).child("passVariants").set(
                        angular.toJson($scope.passVariants)
                    );
                  firebase.database().ref('events/').child($scope.eventID).child("description").set(
                        angular.toJson($scope.eventDescriptions)
                  );
                  if($scope.multiChecked){
                    firebase.database().ref('events/').child($scope.eventID).update({
                        startDate:$scope.multipleStartDate,
                        endDate:$scope.multipleEndDate,
                      });
                  }else{
                    firebase.database().ref('events/').child($scope.eventID).update({
                    startDate:$scope.singlestartDate,
                    endDate: $scope.singleEndDate
                    });
                  }
                  if($scope.monCheck) {
                    firebase.database().ref('events/'+ $scope.eventID).child("slots").child("monday").set(
                        angular.toJson($scope.monSlots)
                        );
                  }
                  
                  if($scope.tueCheck) {
                    firebase.database().ref('events/'+ $scope.eventID).child("slots").child("tuesday").set(
                        angular.toJson($scope.tueSlots)
                        );
                  }
                  if($scope.wedCheck) {
                    firebase.database().ref('events/'+ $scope.eventID).child("slots").child("wednesday").set(
                        angular.toJson($scope.wedSlots)
                        );
                  }
                  if($scope.thuCheck) {
                    firebase.database().ref('events/'+ $scope.eventID).child("slots").child("thursday").set(
                        angular.toJson($scope.thuSlots)
                        );
                  }
                  if($scope.friCheck) {
                    firebase.database().ref('events/'+ $scope.eventID).child("slots").child("friday").set(
                        angular.toJson($scope.friSlots)
                        );
                  }
                  if($scope.satCheck) {
                    firebase.database().ref('events/'+ $scope.eventID).child("slots").child("saturday").set(
                        angular.toJson($scope.satSlots)
                    )
                  }
                  if($scope.sunCheck) {
                    firebase.database().ref('events/'+ $scope.eventID).child("slots").child("sunday").set(
                        angular.toJson($scope.sunSlots)
                        );
                  }
            };
            
        }else{
            $location.path("/login");
        }
        
    }
})();