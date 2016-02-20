app.controller('contactDetailsCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    console.log("in contact Details ctrl");
})