// ----------------------------------------
// Upvote Button Directive
// ----------------------------------------


app.directive("upvoteButton", [function() {
  return {
    template: "<button ng-click='upvote()'>+</button>",
    restrict: "E",
    scope: { subject: "=" },
    link: function(scope, element, attributes) {
      scope.upvote = function() {
        scope.subject.upvotes++;
        if (scope.subject.upvotes >= 10) {
          element.css('background', 'green');
        }
      };
    }
  };
}]);


