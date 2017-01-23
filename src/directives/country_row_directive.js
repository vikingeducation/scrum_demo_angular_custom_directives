// ----------------------------------------
// Country Row Directive
// ----------------------------------------

app.directive("countryRow", [function() {
  return {
    templateUrl: "/templates/_country_row.html",
    restrict: "A",
    scope: {
      country: "=",
      doSomething: "&",
      textVariable: "@",
    },
    link: function(scope, element, attributes) {
      scope.doSomethingElse = function() {
        scope.doSomething();
      };
    }
  };
}]);




