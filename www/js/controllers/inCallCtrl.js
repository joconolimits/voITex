app.controller('inCallCtrl', function ($scope, $stateParams, Chats, contacts) {
    console.log("in the inCallCtrl");
    console.log("the user id: " + $stateParams.userId);
    console.log("the number id: " + $stateParams.numberId);
    $scope.user = contacts.get($stateParams.userId);
    for (var i = 0; i < $scope.user.phoneNumbers.length; i++) {
        if ($scope.user.phoneNumbers[i].id == $stateParams.numberId) {
            $scope.number = $scope.user.phoneNumbers[i].value;
        }
    }
})