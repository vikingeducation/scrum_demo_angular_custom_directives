var app = angular.module("custom", []);

app.controller("CountriesCtrl", ["$scope", "Country", function($scope, Country){
  $scope.countries = Country.list();
  $scope.newCountry = {};

  $scope.createCountry = function(){
    var country = {
      name: $scope.newCountry.name,
      population: $scope.newCountry.population
    };
    Country.create(country);
    $scope.newCountry.name = "";
  };

  $scope.doSomething = function(countryName){
    console.log("Hello from " + countryName + "!");
  };
}]);

app.factory("Country", [function(){
  var _countries = [
    { name: "Azerbaijan", population: 9417000, capital: "Baku", upvotes: 0 },
    { name: "Belgium", population: 11250585, capital: "Bruxelles", upvotes: 0 },
    { name: "Cameroon", population: 22534532, capital: "Yaounde", upvotes: 0 },
    { name: "Democratic People's Republic of Korea", population: 24895000, capital: "Pyongyang", upvotes: 0 },
    { name: "Ethiopia", population: 99465819, capital: "Addis Ababa", upvotes: 0 },
    { name: "Vatican City", population: 451, capital: "Vatican City", upvotes: 0 },
  ];

  return {
    list: function(){ return _countries; },
    create: function(country){
      country.upvotes = 0;
      _countries.push(country);
    }
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
