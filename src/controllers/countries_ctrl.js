// ----------------------------------------
// Countries Ctrl
// ----------------------------------------


app.controller("CountriesCtrl",
  ["$scope", "Country",
  function($scope, Country) {
    $scope.countries = Country.list();
    $scope.newCountry = {};

    $scope.createCountry = function() {
      var country = {
        name: $scope.newCountry.name,
        population: $scope.newCountry.population,
        capital: $scope.newCountry.capital
      };
      Country.create(country);

      $scope.newCountry.name = "";
      $scope.newCountry.population = "";
      $scope.newCountry.capital = "";
    };

    $scope.doSomething = function(countryName) {
      alert("Hello from " + countryName + "!");
    };
  }]);







