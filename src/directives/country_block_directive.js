// ----------------------------------------
// Country Block Directive
// ----------------------------------------


app.directive("countryBlock", [function() {
  return {
    templateUrl: "/templates/_country_block.html",
    restrict: "E",
    scope: { country: "=" },
  };
}]);







