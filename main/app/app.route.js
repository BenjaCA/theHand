/**
 * Created by BCA on 05/02/2016.
 */
angular.module('theHand').config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/playlist', {
            templateUrl: 'app/features/playlist/playlistView.html',
            controller: 'PlaylistController'
        })
            .when('/configuration', {
                templateUrl: 'app/features/configuration/configurationView.html',
                controller: 'ConfigurationController'

            })
            .otherwise({
                redirectTo : '/configuration'
            });
    }]);