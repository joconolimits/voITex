app.controller('inCallCtrl', function ($scope, $stateParams, Chats) {
    console.log("in the inCallCtrl");
    $scope.user = Chats.get($stateParams.userId);
})