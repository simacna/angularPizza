app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];

  $scrope.mains = [
    {
      name: 'Margherita',
      description: 'Marinara sauce, mozzarella, fresh basil',
      price: 6.95
    },
    {
      name: 'Pepperoni',
      description: 'Pepperoni, marinara sauce, mozzarella, fresh oregano',
      price: 7.95
    },
    {
      name: 'Rusitica',
      description: 'Marina sauce, kalamata olivces, fresh oregano',
      price: 8.95
    }

  ];

  $scope.extras = [
    {
      name: 'Breadsticks',
      description: 'Served with marinara sauce',
      price: 4.95
    },
    {
      name: 'Soup of the Day',
      description: 'Take a chance',
      price: 4.95
    },
    {
      name: 'Buffalo Wings',
      description: 'Feel the power of wings',
      price: 6.95
    }

  ];
  ]

}]);