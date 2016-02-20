app.controller('phoneBookCtrl', function ($scope, $rootScope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    console.log("in phone book");

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
    //Togle the filters bar.
    $scope.hasFilters;
    $scope.openFilters = function (hasFilters) {
        $scope.hasFilters = hasFilters;
        if (hasFilters) $scope.hasFilters = false;
        else $scope.hasFilters = true;

    }

})