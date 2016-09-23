var app = angular.module("custom", []);

app.controller("CountriesCtrl", ["$scope", function($scope){
  $scope.countries = [
    { name: "Azerbaijan", population: 9417000, capital: "Baku", upvotes: 0 },
    { name: "Belgium", population: 11250585, capital: "Bruxelles", upvotes: 0 },
    { name: "Cameroon", population: 22534532, capital: "Yaounde", upvotes: 0 },
    { name: "Democratic People's Republic of Korea", population: 24895000, capital: "Pyongyang", upvotes: 0 },
    { name: "Ethiopia", population: 99465819, capital: "Addis Ababa", upvotes: 0 },
    { name: "Vatican City", population: 451, capital: "Vatican City", upvotes: 0 },
  ];

  $scope.doSomething = function(countryName){
    console.log("Hello from " + countryName + "!");
  };
}]);

app.directive("countryRow", [function(){
  return {
    template:
    "<td><button ng-click='upvote()'>+</button></td>" +
    "<td>{{ country.upvotes }}</td>" +
    "<td ng-click='doSomething()'>{{ country.name }}</td>" +
    "<td>{{ country.population | number }}</td>" +
    "<td>{{ country.capital }}, {{ textVariable }}</td>",
    restrict: "A",
    scope: {
      country: "=",
      doSomething: "&",
      textVariable: "@",
    },
    link: function(scope){
      scope.upvote = function(){
        scope.country.upvotes++;
      };

      scope.doSomethingElse = function(){
        scope.doSomething();
      };
    }
  };
}]);

app.directive("countryBlock", [function(){
  return {
    templateUrl: "templates/_country.html",
    restrict: "E",
    scope: { country: "=" },
  };
}]);

app.directive("upvoteButton", [function(){
  return {
    template: "<button ng-click='upvote()'>+</button>",
    restrict: "E",
    scope: { subject: "=" },
    link: function(scope){
      scope.upvote = function(){
        scope.subject.upvotes++;
      };
    }
  };
}]);
