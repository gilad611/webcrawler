/**
 * Created by Gilad on 27/08/2015.
 */

angular.module('App.routes', [
    'App.jokes'
])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('root', {
            url: '/',
            abstract: true
        })
            .state('jokes', {
                parent: 'root',
                url: 'jokes',
                views: {
                    'mainContent@': {
                        templateUrl: 'jokes/jokes.tpl.html',
                        controller: 'JokesCtrl'
                    }
                }
            });
            //.state('movie', {
            //    url: 'movie/:movieId',
            //    parent: 'root',
            //    views: {
            //        'mainContent@': {
            //            templateUrl: 'movie/movie.tpl.html',
            //            controller: 'MovieCtrl'
            //        }
            //    }
            //})
            //.state('trailer', {
            //    url: 'movie/trailer/:movieId',
            //    parent: 'root',
            //    views: {
            //        'mainContent@': {
            //            templateUrl: 'trailer/trailer.tpl.html',
            //            controller: 'TrailerCtrl'
            //        }
            //    }
            //})
            //.state('search', {
            //    url: 'search/:movieName',
            //    parent: 'root',
            //    views: {
            //        'mainContent@': {
            //            templateUrl: 'search/search.tpl.html',
            //            controller: 'SearchCtrl'
            //        }
            //    }
            //})
            //.state('genre', {
            //    url: 'genre/:genre',
            //    parent: 'root',
            //    views: {
            //        'mainContent@': {
            //            templateUrl: 'genre/genre.tpl.html',
            //            controller: 'GenreCtrl'
            //        }
            //    }
            //})
            //
            //.state('person', {
            //    url: 'person/:personId',
            //    parent: 'root',
            //    views: {
            //        'mainContent@': {
            //            templateUrl: 'person/person.tpl.html',
            //            controller: 'PersonCtrl'
            //        }
            //    }
            //});

        $urlRouterProvider.otherwise('/jokes');

    });