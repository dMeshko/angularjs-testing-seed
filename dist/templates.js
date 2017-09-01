angular.module('angularjs.testing').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('app/components/home/home.html',
    "<h2 id=\"welcome-message\">hello..hmm, {{ ::message }}</h2><h4>TESTING <small>okoko</small></h4>"
  );

}]);
