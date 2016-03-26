app.controller('callListCtrl', function ($scope, callListFactory) {
    console.log("In callListCtrl");



    $scope.data = {};
    $scope.callTypeDisplay = function(type) {
        switch(type) {
            case 1:
                return 'Incoming';
            case 2:
                return 'Outgoing';
            case 3:
                return 'Missed';
            default:
                return 'Unknown';
        }
    };

    //document.addEventListener("deviceready", onDeviceReady, false);
    //function onDeviceReady() {
    //    window.plugins.calllog.list(1, function (response) {
    //        console.log("I got response from The plugin");
    //        console.log("The response is: " + response);
    //    }, function (error) {
    //        console.log("I got Error from The plugin");
    //    });
    //}
    callListFactory.list(1).then(
            function (callLog) {
                console.log(callLog);
                $scope.data.lastCall = callLog[0];
                alert('test');
            },
            function (error) {
                console.error(error);
                alert('error');
            });


})