/**
 * Created by Gilad on 27/08/2015.
 */
angular.module('App.common')
    //display joke data panel
    .directive('jokeData', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                jokeData: '='
            },
            templateUrl: 'jokeData/jokeData.tpl.html'
        };
    });