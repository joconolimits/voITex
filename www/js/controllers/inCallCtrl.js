app.controller('inCallCtrl', function ($scope, $stateParams, $state, inCallFactory, contacts) {
    console.log("in the inCallCtrl");
    console.log("the user id: " + $stateParams.userId);
    console.log("the number id: " + $stateParams.numberId);

    //get the contact that we are calling
    $scope.user = contacts.get($stateParams.userId);
    // get the corect phone number of the contact we are calling
    for (var i = 0; i < $scope.user.phoneNumbers.length; i++) {
        if ($scope.user.phoneNumbers[i].id == $stateParams.numberId) {
            $scope.number = $scope.user.phoneNumbers[i].value;
        }//end if
    }//end for


    //start converting text 
    inCallFactory.startCall();
        
    //end the call
    $scope.stopCall = function () {
        inCallFactory.stopCall()
        //after call ended return to phonebook
        $state.go('tab.phoneBook');
    }//end stopCall method

})