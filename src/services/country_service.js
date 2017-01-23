// ----------------------------------------
// Country Service
// ----------------------------------------


app.factory("Country", [function() {
  var _id = 0;
  var _countries = [
    { id: 1, name: "Azerbaijan", population: 9417000, capital: "Baku", upvotes: 0 },
    { id: 2, name: "Belgium", population: 11250585, capital: "Bruxelles", upvotes: 0 },
    { id: 3, name: "Cameroon", population: 22534532, capital: "Yaounde", upvotes: 0 },
    { id: 4, name: "Democratic People's Republic of Korea", population: 24895000, capital: "Pyongyang", upvotes: 0 },
    { id: 5, name: "Ethiopia", population: 99465819, capital: "Addis Ababa", upvotes: 0 },
    { id: 6, name: "Vatican City", population: 451, capital: "Vatican City", upvotes: 0 },
  ];
  _id = _countries.length + 1;

  return {
    list: function() {
      return _countries;
    },
    create: function(country) {
      country.upvotes = 0;
      country.id = _id;
      _countries.push(country);
      _id++;
    }
  };
}]);


