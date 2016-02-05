'use strict';

angular.module('theHand')
    .controller('ConfigurationController', ['$scope', function ($scope) {

        var configuration = {
            serviceUrl: ',',
            handParams: {
                thumb: 'thumb',
                index: 'index',
                major: 'major',
                ringFinger: 'ringFinger',
                auricular: 'auricular'
            }
        }
    }]);