app.controller('phoneBookCtrl', function ($scope, $rootScope, Chats, contacts) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    console.log("in phone book");
    $scope.phoneContacts = contacts.all();
    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
    //Togle the filters bar.
    //$scope.hasFilters;
    //$scope.openFilters = function (hasFilters) {
    //    $scope.hasFilters = hasFilters;
    //    if (hasFilters) $scope.hasFilters = false;
    //    else $scope.hasFilters = true;
    //}

    //// Get the phone  contacts
    //document.addEventListener("deviceready", onDeviceReady, false);
    //function onDeviceReady() {
    //    navigator.contacts.find(
    //    [navigator.contacts.fieldType.displayName],
    //    gotContacts,
    //    errorHandler);

    //}

    //function errorHandler(e) {
    //    console.log("errorHandler: " + e);
    //}

    //function gotContacts(c) {
    //    console.log("gotContacts, number of results " + c.length);
    //    for (var i = 0, len = c.length; i < len; i++) {
    //        //console.dir(c[i]);
    //        var contact = c[i];
    //        $scope.phoneContacts.push(contact);
    //    }
    //}
})