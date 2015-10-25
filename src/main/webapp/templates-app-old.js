angular.module('templates-app', ['genre/genre.tpl.html', 'jokes/jokes.tpl.html', 'movie/movie.tpl.html', 'movies/movies.tpl.html', 'person/person.tpl.html', 'search/search.tpl.html', 'trailer/trailer.tpl.html']);

angular.module("genre/genre.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("genre/genre.tpl.html",
    "<div class=\"row-fluid pull-left col-xs-12\">\n" +
    "    <div ng-repeat=\"movieData in filteredMovies\">\n" +
    "        <div class=\"col col-lg-2 col-md-3 col-sm-4 col-xs-4\">\n" +
    "            <!-- inject shortMovieData.tpl.html via directive -->\n" +
    "            <short-movie-data movie-data=\"movieData\" ng-if=\"movieReady\"></short-movie-data>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row-fluid pull-left col-xs-12\">\n" +
    "    <div class=\"col col-lg-12 text-center\">\n" +
    "        <pagination next-text=\"{{'NEXT' | translate}}\"\n" +
    "                    previous-text=\"{{'BACK_PAGINATION' | translate}}\"\n" +
    "                    total-items=\"totalItems\" ng-model=\"currentPage\"\n" +
    "                    ng-change=\"pageChanged()\">\n" +
    "        </pagination>\n" +
    "        <a class=\"btn btn-block center-block\" ng-click=\"back()\">{{'BACK' | translate}}</a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("jokes/jokes.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("jokes/jokes.tpl.html",
    "<div class=\"row-fluid pull-left col-xs-12\">\n" +
    "    <div ng-repeat=\"jokesData in filteredJokes\">\n" +
    "        <div class=\"col col-lg-2 col-md-3 col-sm-4 col-xs-4\">\n" +
    "            <!-- inject jokeData.tpl.html via directive -->\n" +
    "            <joke-data joke-data=\"jokeData\" ng-if=\"jokesReady\"></joke-data>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row-fluid pull-left col-xs-12\">\n" +
    "    <div class=\"col col-lg-12 text-center\">\n" +
    "        <pagination next-text=\"{{'NEXT' | translate}}\" previous-text=\"{{'BACK_PAGINATION' | translate}}\" total-items=\"totalItems\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>\n" +
    "        <a class=\"btn btn-block center-block\" ng-click=\"back()\">{{'BACK' | translate}}</a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("movie/movie.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("movie/movie.tpl.html",
    "<div class=\"container\" ng-if=\"movieReady\">\n" +
    "    <div class=\"well\">\n" +
    "        <div class=\"row\">\n" +
    "\n" +
    "            <!-- img column -->\n" +
    "            <div class=\"col col-lg-4\">\n" +
    "                    <!-- movie poster img -->\n" +
    "                    <img class=\"img-responsive center-block\" fallback-src ng-src=\"{{ movieData.Poster }}\"/>\n" +
    "                <hr>\n" +
    "                <!-- go to trailer button -->\n" +
    "                <button class=\"btn btn-default\" ui-sref=\"trailer({movieId: movieData.id})\"><span class=\"glyphicon glyphicon-play\"></span> {{'WATCH TRAILER' | translate}}</button>\n" +
    "            </div>\n" +
    "            <!-- /img column -->\n" +
    "\n" +
    "            <!-- movie data column -->\n" +
    "            <div class=\"col col-lg-4\">\n" +
    "                <!-- movie title -->\n" +
    "                <p><h4><u>{{movieData.Title}}</u></h4></p><hr>\n" +
    "                <p>\n" +
    "                <!-- movie year -->\n" +
    "                <strong>{{'YEAR' | translate}}:</strong>\n" +
    "                {{movieData.Year}}\n" +
    "                </p>\n" +
    "                <!-- movie plot -->\n" +
    "                <p><strong>{{'PLOT' | translate}}:</strong>\n" +
    "                    {{movieData.Plot}}\n" +
    "                </p><hr>\n" +
    "                <!-- movie genres -->\n" +
    "                <p><strong>{{'GENRES' | translate}}:</strong>\n" +
    "                    <!-- ngRepeat - display movie genres -->\n" +
    "                    <span ng-repeat=\"genre in ::movieData.Genre track by $index\">\n" +
    "                        {{::genre.name}}\n" +
    "                    </span>\n" +
    "                </p>\n" +
    "                <!-- movie rating (via directive) -->\n" +
    "                <p>\n" +
    "                    <rating ng-model=\"movieData.imdbRating\" max=\"10\" readonly=\"true\" on-leave=\"overStar = null\"></rating>\n" +
    "                </p>\n" +
    "            </div>\n" +
    "            <!-- /movie data column -->\n" +
    "\n" +
    "            <!-- cast members data column -->\n" +
    "            <div class=\"col col-lg-4\">\n" +
    "                <div class=\"well\">\n" +
    "                    <!-- cast members title -->\n" +
    "                    <p><u><strong>{{'CAST MEMBERS' | translate}}</strong></u></p>\n" +
    "                    <div class=\"component photogrid center-block clearfix\">\n" +
    "                        <!-- ngRepeat - display cast members images -->\n" +
    "                        <a ui-sref=\"person({personId: castMember.id})\" ng-repeat=\"castMember in ::cast track by $index\">\n" +
    "                            <img fallback-src\n" +
    "                                 data-toggle=\"tooltip\"\n" +
    "                                 ng-src=\"{{ castMember.profile_path }}\"\n" +
    "                                 alt=\"{{castMember.name}}\"\n" +
    "                                 tooltip-trigger=\"mouseenter\"\n" +
    "                                 tooltip=\"{{castMember.name}}\"\n" +
    "                                 class=\"img-rounded\"/></a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- /cast members data column -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- go back button -->\n" +
    "    <a class=\"btn btn-block center-block\" ng-click=\"back()\">{{'BACK' | translate}}</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("movies/movies.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("movies/movies.tpl.html",
    "<div class=\"row-fluid pull-left col-xs-12\">\n" +
    "    <div ng-repeat=\"movieData in filteredMovies\">\n" +
    "        <div class=\"col col-lg-2 col-md-3 col-sm-4 col-xs-4\">\n" +
    "            <!-- inject shortMovieData.tpl.html via directive -->\n" +
    "            <short-movie-data movie-data=\"movieData\" ng-if=\"movieReady\"></short-movie-data>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row-fluid pull-left col-xs-12\">\n" +
    "    <div class=\"col col-lg-12 text-center\">\n" +
    "        <pagination next-text=\"{{'NEXT' | translate}}\" previous-text=\"{{'BACK_PAGINATION' | translate}}\" total-items=\"totalItems\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>\n" +
    "        <a class=\"btn btn-block center-block\" ng-click=\"back()\">{{'BACK' | translate}}</a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("person/person.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("person/person.tpl.html",
    "<div class=\"container\" ng-if=\"personReady\">\n" +
    "    <!-- start well -->\n" +
    "    <div class=\"well\">\n" +
    "        <div class=\"row\">\n" +
    "            <!-- person img column -->\n" +
    "            <div class=\"col col-lg-4\">\n" +
    "                    <img class=\"img-responsive center-block\"\n" +
    "                         fallback-src ng-src=\"{{ person.profile_path }}\"/><hr>\n" +
    "            </div>\n" +
    "            <!-- /person img column -->\n" +
    "\n" +
    "            <!-- person data column -->\n" +
    "            <div class=\"col col-lg-4\">\n" +
    "                <!-- person name -->\n" +
    "                <p>\n" +
    "                    <h3><u>{{person.name}}</u></h3>\n" +
    "                </p><hr>\n" +
    "                <!-- person birthday -->\n" +
    "                <p ng-if=\"person.birthday\">\n" +
    "                    <strong>{{'BIRTHDAY' | translate}}: </strong>\n" +
    "                    {{person.birthday}}\n" +
    "                </p>\n" +
    "                <!-- person place of birth -->\n" +
    "                <p ng-if=\"person.place_of_birth\">\n" +
    "                    <strong>{{'BIRTH PLACE' | translate}}: </strong>\n" +
    "                    {{person.place_of_birth}}\n" +
    "                </p>\n" +
    "                <!-- person homepage -->\n" +
    "                <p ng-if=\"person.homepage\">\n" +
    "                    <strong>{{'HOME PAGE' | translate}}: </strong>\n" +
    "                    {{person.homepage}}\n" +
    "                </p><hr>\n" +
    "                <!-- person biography -->\n" +
    "                <h5><u>{{'BIOGRAPHY' | translate}}</u></h5>\n" +
    "                <p>{{person.biography}}</p>\n" +
    "            </div>\n" +
    "            <!-- /person data column -->\n" +
    "\n" +
    "            <!-- person movie credits data column -->\n" +
    "            <div class=\"col col-lg-4\">\n" +
    "                <div class=\"well\">\n" +
    "                    <p ng-if=\"creditsReady\">\n" +
    "                        <!-- credits title -->\n" +
    "                        <strong><u>{{'MOVIE CREDITS' | translate}}</u></strong>\n" +
    "                    </p><hr>\n" +
    "                    <!-- movies credits -->\n" +
    "                    <div class=\"component photogrid center-block clearfix\">\n" +
    "                        <!-- ngRepeat - display all movies person participated in -->\n" +
    "                        <a ui-sref=\"movie({movieId: credits.id})\" ng-repeat=\"credits in movieCredits\">\n" +
    "                            <img fallback-src\n" +
    "                                 data-toggle=\"tooltip\"\n" +
    "                                 ng-src=\"{{ 'http://image.tmdb.org/t/p/w500'+credits.poster_path }}\"\n" +
    "                                 alt=\"{{credits.title}}\"\n" +
    "                                 tooltip-trigger=\"mouseenter\"\n" +
    "                                 tooltip=\"{{credits.title}}. Character: {{credits.character}}\"\n" +
    "                                 class=\"img-rounded\"/>\n" +
    "                        </a>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <!-- /person movie credits data column -->\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <!-- end well -->\n" +
    "\n" +
    "    <!-- go back button -->\n" +
    "    <a class=\"btn btn-block center-block\" ng-click=\"back()\">{{'BACK' | translate}}</a>\n" +
    "</div>\n" +
    "");
}]);

angular.module("search/search.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("search/search.tpl.html",
    "<div class=\"row-fluid pull-left col-xs-12\">\n" +
    "    <div ng-repeat=\"movieData in filteredMovies\">\n" +
    "        <div class=\"col col-lg-2 col-md-3 col-sm-4 col-xs-4\">\n" +
    "            <!-- inject shortMovieData.tpl.html via directive -->\n" +
    "            <short-movie-data movie-data=\"movieData\" ng-if=\"movieReady\"></short-movie-data>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"row-fluid pull-left col-xs-12\">\n" +
    "    <div class=\"col col-lg-12 text-center\">\n" +
    "        <pagination next-text=\"{{'NEXT' | translate}}\" previous-text=\"{{'BACK_PAGINATION' | translate}}\" total-items=\"totalItems\" ng-model=\"currentPage\" ng-change=\"pageChanged()\"></pagination>\n" +
    "        <a class=\"btn btn-block center-block\" ng-click=\"back()\">{{'BACK' | translate}}</a>\n" +
    "    </div>\n" +
    "</div>");
}]);

angular.module("trailer/trailer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("trailer/trailer.tpl.html",
    "<div class=\"container\">\n" +
    "    <div class=\"well\">\n" +
    "        <div class=\"row\">\n" +
    "                <div class=\"embed-responsive embed-responsive-16by9 video-wrapper\" ng-if=\"movieReady\">\n" +
    "                    <div class=\"center-block\"><youtube-video class=\"embed-responsive-item\" video-id=\"movieTrailerKey\"></youtube-video></div>\n" +
    "                </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <a class=\"btn btn-block center-block\" ng-click=\"back()\">{{'BACK' | translate}}</a>\n" +
    "</div>\n" +
    "");
}]);
