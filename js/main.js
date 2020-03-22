var app = angular.module("Artmoney", ['ngAnimate']);
app.controller("Global", function($scope, $rootScope) {
  $scope.products = [{
      name: 'Борошно Богумила пшеничне вищий сорт',
      mass: '2 кг',
      price: '31',

    },
    {
      name: 'Борошно Хуторок пшеничне',
      mass: '1 кг',
      price: '14',

    },
    {
      name: 'Макаронні вироби спіраль',
      mass: '5 кг',
      price: '78',

    },
    {
      name: 'Цукор Хуторок кристалічний білий',
      mass: '5 кг',
      price: '111',

    },
    {
      name: 'Цукор Хуторок',
      mass: '800 г',
      price: '20',

    },
    {
      name: 'Папір туалетний Кохавинка',
      mass: '1 шт',
      price: '5',

    },
    {
      name: 'Папір туалетний Сніжна панда',
      mass: '4 шт',
      price: 31,

    },
    {
      name: 'Крупа гречана Хуторок',
      mass: '800 г',
      price: '41',

    },
    {
      name: 'Крупа гречана Кожен день ядриця швидкорозварювана ',
      mass: '1 кг',
      price: '34',

    },
    {
      name: 'Рис Хуторок довгий',
      mass: '800 г',
      price: '20',

    },

  ]
  // for (var i = 0; i < $scope.products.length; i++) {
  //   console.log($('#product'+i).val());
  //
  // }

  // Model inputs

  $scope.order = new Array();
  $scope.change = (quantity, count) => {
    console.log(quantity, count);

    function pushOrder() {
      if (quantity != 0 && quantity != null && quantity != undefined) {
        $scope.order.push({
          name: $scope.products[count].name,
          quantity: quantity,
          price: $scope.products[count].price * quantity
        });
      }
    }
    pushOrder()

    $scope.getTotal = function() {
      var total = 0;
      for (var i = 0; i < $scope.order.length; i++) {
        var product = $scope.order[i];
        total += (product.price);
      }
      return total;
    }
  }

  $scope.delete = (a) => {

    $scope.order.splice(a, 1);
    console.log(a);
  }
  $scope.save = () => {
    $scope.data = {

    }
  }
  var config = {
    apiKey: "AIzaSyANByuaeDUXVVc9FxXt522AvKj-sbytUCA",
    authDomain: "dostavymo-b160d.firebaseapp.com",
    databaseURL: "https://dostavymo-b160d.firebaseio.com",
    projectId: "dostavymo-b160d",
    storageBucket: "dostavymo-b160d.appspot.com",
    messagingSenderId: "390587806668",
    appId: "1:390587806668:web:5ab15e74588b1ad65f2369",
    measurementId: "G-GJ7TCLH5QR"
  };
  // Initialize Firebase
  firebase.initializeApp(config);
  var messagesRef = firebase.database().ref('messages');
  $scope.success = false;
  $scope.save = () => {
$scope.success = true;
    setTimeout(function () {
        $scope.success = false;
        $scope.order = '';
        $scope.mobile = '';
        $scope.name = '';
        $scope.$apply();
    }, 3000);
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      order: $scope.order,
      phome: $scope.mobile,
      name: $scope.name
    });
  }

  messagesRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      console.log(childData);
    });
  });
});
