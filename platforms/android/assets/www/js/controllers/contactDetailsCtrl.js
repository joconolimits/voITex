app.controller('contactDetailsCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
    alert("in contact Details ctrl");
})