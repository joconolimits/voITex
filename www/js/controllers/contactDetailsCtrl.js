app.controller('contactDetailsCtrl', function ($scope, $stateParams, Chats, $ionicScrollDelegate, $ionicSlideBoxDelegate) {
    $scope.chat = Chats.get($stateParams.chatId);
    console.log("in contact Details ctrl");

    $ionicSlideBoxDelegate.update();
    $scope.onUserDetailContentScroll = onUserDetailContentScroll
    $scope.like = like

    function like() {
        $scope.liked = true
    }

    function onUserDetailContentScroll() {
        var scrollDelegate = $ionicScrollDelegate.$getByHandle('userDetailContent');
        var scrollView = scrollDelegate.getScrollView();
        $scope.$broadcast('userDetailContent.scroll', scrollView);
    }
})