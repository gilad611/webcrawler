angular.module('templates-common', ['adultValidator/adultCheck.tpl.html', 'jokeData/jokeData.tpl.html', 'navbar/navbar.tpl.html']);

angular.module("adultValidator/adultCheck.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("adultValidator/adultCheck.tpl.html",
    "<div ng-class=\"rtl ? 'rtl' : ''\" class=\"modal-body\">\n" +
    "    <!-- warning massages -->\n" +
    "    <h1><u>{{'WARNING' | translate}}</u></h1>\n" +
    "    <p>{{'WARNING MSG'| translate}}</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <form>\n" +
    "        <!-- modal remember me checkbox -->\n" +
    "        <div class=\"checkbox\">\n" +
    "            <input type=\"checkbox\" ng-model=\"adultData.rememberMe\"><label class=\"pull-left\">{{'REMEMBER ME' | translate}}</label>\n" +
    "        </div>\n" +
    "        <!-- modal footer buttons -->\n" +
    "        <button class=\"btn btn-default\" ng-click=\"isAdultCheck()\">{{'OVER 18' | translate}}</button>\n" +
    "        <button class=\"btn btn-warning\" ng-click=\"dismiss()\">{{'DISMISS' | translate}}</button>\n" +
    "    </form>\n" +
    "</div>");
}]);

angular.module("jokeData/jokeData.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("jokeData/jokeData.tpl.html",
    "<div class=\"panel-default\">\n" +
    "    <div class=\"img-wrapper center-block\" >\n" +
    "        <!--<a ui-sref=\"movie({movieId: movieData.id})\">-->\n" +
    "            <!--<img class=\"img-responsive img-rounded center-block\" fallback-src ng-src=\"{{ jokeData.title }}\"/>-->\n" +
    "        <p data-toggle=\"tooltip\" tooltip-trigger=\"mouseenter\" tooltip=\"{{jokeData.title}}\">\n" +
    "            <h3>{{jokeData.title | characters:15:true}}</h3>\n" +
    "        </p>\n" +
    "        <p class=\"imgDescription\">\n" +
    "            <small>\n" +
    "                <rating ng-model=\"jokeData.rating\" max=\"5\" readonly=\"true\" on-leave=\"overStar = null\"></rating>\n" +
    "            </small>\n" +
    "        </p>\n" +
    "        <p><small>{{jokeData.genre}}</small></p>\n" +
    "    </div>\n" +
    "    <div class=\"text-center\">\n" +
    "        <!--<p data-toggle=\"tooltip\" tooltip-trigger=\"mouseenter\" tooltip=\"{{movieData.Title}}\"><strong>{{movieData.Title | characters:15:true}}</strong></p>-->\n" +
    "        <p>{{jokeData.content}}</p>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("navbar/navbar.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("navbar/navbar.tpl.html",
    "<nav class=\"navbar navbar-default\" role=\"navigation\" outside-click=\"navCollapsed = true\"  ng-controller=\"NavbarCtrl\">\n" +
    "\n" +
    "    <!-- header -->\n" +
    "    <div class=\"navbar-header\">\n" +
    "\n" +
    "        <!-- collapse navbar toggle button (auto-display on small screens) -->\n" +
    "        <a class=\"togl navbar-toggle\" ng-click=\"navCollapsed = !navCollapsed\">\n" +
    "            <span class=\"glyphicon glyphicon-menu-hamburger\"></span>\n" +
    "        </a>\n" +
    "\n" +
    "        <!-- app title -->\n" +
    "        <a class=\"navbar-brand\" href=\"#\">{{'TITLE' | translate}}</a>\n" +
    "    </div>\n" +
    "    <!-- end header -->\n" +
    "\n" +
    "    <!-- collapsable navbar (auto-callapse on small screens)-->\n" +
    "    <div class=\"collapse navbar-collapse\" collapse=\"navCollapsed\">\n" +
    "\n" +
    "        <!-- left-side bar -->\n" +
    "        <ul class=\"nav navbar-nav\">\n" +
    "\n" +
    "            <!-- movies dropdown menu -->\n" +
    "            <li class=\"active\" dropdown on-toggle=\"toggled(open)\">\n" +
    "                <a href=\"#\" id=\"simple-dropdown1\" dropdown-toggle>\n" +
    "                    {{'MOVIES' | translate}}\n" +
    "                    <span class=\"caret\"></span>\n" +
    "                </a>\n" +
    "                <ul class=\"dropdown-menu\" aria-labelledby=\"simple-dropdown1\">\n" +
    "                    <li><a ui-sref=\"movies({movies: 'Popular'})\">{{'POPULAR' | translate}}</a></li>\n" +
    "                    <li><a ui-sref=\"movies({movies: 'NowPlaying'})\">{{'NOW PLAYING' | translate}}</a></li>\n" +
    "                    <li><a ui-sref=\"movies({movies: 'TopRated'})\">{{'TOP RATED' | translate}}</a></li>\n" +
    "                    <li><a ui-sref=\"movies({movies: 'Upcoming'})\">{{'UPCOMING' | translate}}</a></li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "            <!-- end movies dropdown menu -->\n" +
    "\n" +
    "            <!-- genres dropdown menu -->\n" +
    "            <li dropdown on-toggle=\"toggled(open)\">\n" +
    "                <a href=\"#\" id=\"simple-dropdown\" dropdown-toggle>{{'GENRES' | translate}}<span class=\"caret\"></span></a>\n" +
    "                <ul class=\"dropdown-menu\" aria-labelledby=\"simple-dropdown\">\n" +
    "                    <!-- for each genere -->\n" +
    "                    <li ng-repeat=\"genre in genres track by genre.id\">\n" +
    "                        <a ui-sref=\"genre({genre: genre.id})\">{{genre.name}}</a>\n" +
    "                    </li>\n" +
    "                </ul>\n" +
    "            </li>\n" +
    "            <!-- end genres dropdown menu -->\n" +
    "\n" +
    "        </ul>\n" +
    "        <!-- end left-side bar -->\n" +
    "\n" +
    "        <!-- right-side bar -->\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "\n" +
    "            <!-- languages buttons -->\n" +
    "            <li>\n" +
    "                <!-- english button -->\n" +
    "                <a ng-click=\"changeLanguage('en')\">\n" +
    "                    <span class=\"lang-sm lang-lbl\" lang=\"en\"></span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <!-- hebrew button -->\n" +
    "                <a ng-click=\"changeLanguage('he')\">\n" +
    "                <span class=\"lang-sm lang-lbl\" lang=\"iw\"></span>\n" +
    "                </a>\n" +
    "            </li>\n" +
    "            <!-- end languages buttons -->\n" +
    "\n" +
    "            <!-- search bar -->\n" +
    "            <li>\n" +
    "                <!-- search input -->\n" +
    "                <form class=\"form-group\">\n" +
    "                    <input type=\"text\"\n" +
    "                           ng-model=\"movieName\"\n" +
    "                           class=\"form-control\"\n" +
    "                           placeholder=\"{{'SEARCH' | translate}}\"\n" +
    "                           ng-enter=\"searchOnEnterKeyPress(movieName)\">\n" +
    "                </form>\n" +
    "            </li>\n" +
    "            <li>\n" +
    "                <!-- search button -->\n" +
    "                <a ui-sref=\"search({movieName: movieName})\" class=\"glyphicon glyphicon-search\"></a>\n" +
    "            </li>\n" +
    "            <!-- end search bar -->\n" +
    "        </ul>\n" +
    "        <!-- end right-side bar -->\n" +
    "    </div>\n" +
    "    <!-- end collapsable navbar -->\n" +
    "</nav>");
}]);
