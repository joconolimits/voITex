﻿//Author Jordan
// This does not work It needs some Hardcore Debugging. 
appServices.factory('callListFactory', ['$q', function ($q) {
    console.log("Factory 1");
        return {

            list: function (days) {
                console.log("Factory 2");
                var q = $q.defer();
                // days is how many days back to go
                console.log("Factory q: " + q.resolve);
                //console.log("window.plugins.calllog gives: " + window.plugins.calllog);
                console.log("window.plugins.CallNumber gives: ");
                document.addEventListener("deviceready", onDeviceReady, false);
                function onDeviceReady() {
                    console.log("window.plugins.calllog gives: ");
                    window.plugins.calllog.list(days, function (response) {
                        q.resolve(response.rows);
                    }, function (error) {
                        q.reject(error)
                    });
                }
                //window.plugins.calllog.list(days, function (response) {
                //    q.resolve(response.rows);
                //}, function (error) {
                //    q.reject(error)
                //});
                return q.promise;
            },

            contact : function(phoneNumber) {
                var q = $q.defer();
                window.plugins.calllog.contact(phoneNumber, function (response) {
                    q.resolve(response);
                }, function (error) {
                    q.reject(error)
                });
                return q.promise;
            },

            show : function(phoneNumber) {
                var q = $q.defer();
                window.plugins.calllog.show(phoneNumber, function (response) {
                    q.resolve(response);
                }, function (error) {
                    q.reject(error)
                });
                return q.promise;
            }
        }
    }])