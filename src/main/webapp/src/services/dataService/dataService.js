angular.module('App.services')
    .service('dataService', ['$http', 'alertService',
        function ($http, alertService) {
            var self = this;

            /**
             * parse image path with prefix: 'http://image.tmdb.org/t/p/w500/'
             */
            var parseImgPathResult = function (results) {
                return _.mapValues(results, function (value, key) {
                    if (key === 'Poster') {
                        return 'http://image.tmdb.org/t/p/w500' + value;
                    }
                    if (key === 'profile_path') {
                        return 'http://image.tmdb.org/t/p/w500' + value;
                    }
                    return value;
                });
            };

            //$http apiInterceptor prefix
            var httpPrefix = 'localhost:8080/mcg/jokes/';

            /***
             * get all text jokes data
             * @param callback
             */
            self.getAllJokes = function (callback) {
                $http.get(httpPrefix + 'gettextjokes')
                    .then(function (data) {
                        //var result = parseMovieResult(data.data.results);
                        callback(null, result);
                    }).catch(function (error) {
                        callback(error);
                        console.log(error);
                    });
            };

            return self;
        }]);