/**
 * Created by Gilad on 27/08/2015.
 */
angular.module('App.jokes', [])
    .controller('JokesCtrl', ['$scope', '$stateParams', '$log', 'alertService', 'dataService',
        function ($scope, $stateParams, $log, alertService, dataService) {

    /***
     * get all jokes
     */
    var getAllJokes = function () {
        dataService.getAllJokes(function(err, jokes){

            if (err){
                alertService.add('warning', 'Oops! No joke was found. ' + err);
                console.log(err);
                return;
            }
            if (jokes){
                $scope.jokeData = jokes;
                paginationSettingsInit(jokes);
            }
        });
    };

    /**
     * slice movies for pagination
     */
    var sliceJokesByPagination = function (jokes) {
        var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
            end = begin + $scope.itemsPerPage;
        $scope.filteredJokes = jokes && jokes.slice(begin, end);
    };

    /**
     * on page change event from paginatino directive
     */
    $scope.pageChanged = function () {
        //$log.log('Page changed to: ' + $scope.currentPage);
        sliceJokesByPagination();
    };

    /***
     * ui pagination init
     */
    var paginationSettingsInit = function(jokes){
        $scope.totalItems = _.size(jokes);
        $scope.currentPage = 1;
        $scope.itemsPerPage = 10;
        sliceJokesByPagination(jokes);
        $scope.jokesReady = true;
    };

    /***
     * init
     */
    var init = function () {
        $scope.jokesReady = false;
        getAllJokes();
    };

    init();

}]);