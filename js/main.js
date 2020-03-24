var app = angular.module("Artmoney", ['ngAnimate']);
app.controller("Global", function($scope, $rootScope) {
  $scope.products = [{
      name: 'Борошно Богумила пшеничне вищий сорт',
      mass: '2 кг',
      price: '31',
      img: "Борошно Богумила пшеничне вищий сорт.jpg"

    },
    {
      name: 'Борошно Хуторок пшеничне',
      mass: '1 кг',
      price: '14',
      img: 'Борошно Хуторок пшеничне.jpg'

    },
    {
      name: 'Макаронні вироби спіраль',
      mass: '5 кг',
      price: '78',
      img: 'Макаронні вироби спіраль.jpg'
    },
    {
      name: 'Цукор Хуторок кристалічний білий',
      mass: '5 кг',
      price: '111',
      img: 'Цукор Хуторок кристалічний білий.jpg'
    },
    {
      name: 'Цукор Хуторок',
      mass: '800 г',
      price: '20',
      img: 'Цукор Хуторок.jpg'
    },
    {
      name: 'Папір туалетний Кохавинка',
      mass: '1 шт',
      price: '5',
      img: 'Папір туалетний Кохавинка.jpg'
    },
    {
      name: 'Папір туалетний Сніжна панда',
      mass: '4 шт',
      price: 31,
      img: 'Папір туалетний Сніжна панда.jpg'
    },
    {
      name: 'Крупа гречана Хуторок',
      mass: '800 г',
      price: '41',
      img: 'Крупа гречана Хуторок.jpg'
    },
    {
      name: 'Крупа гречана Кожен день ядриця швидкорозварювана ',
      mass: '1 кг',
      price: '34',
      img: 'Крупа гречана Кожен день ядриця швидкорозварювана.jpg'
    },
    {
      name: 'Рис Хуторок довгий',
      mass: '1 кг',
      price: '20',
      img: 'Рис Хуторок довгий.jpg'
    },
    {
      name: 'Олія соняшникова Олейна Традиційна рафінована',
      mass: '850 мл',
      price: '28',
      img: 'Олія соняшникова Олейна Традиційна рафінована.jpg'
    },

  ]
  // for (var i = 0; i < $scope.products.length; i++) {
  //   console.log($('#product'+i).val());
  //
  // }
$scope.data = new Array();
  // Model inputs
$scope.minsum = 399;
$scope.error_message = false;
$scope.success_message = false;
  $scope.order = new Array();
  $scope.change = (quantity, count) => {
    console.log(quantity, count);
    if (quantity == 0) {
        $scope.error_message = true;
        $scope.success_message = false;
        setTimeout(function () {
          $scope.error_message = false;
          $scope.$apply()
        }, 3000);
        console.log('$scope.error_message');
    }
    else {
      $scope.success_message = true;
      $scope.error_message = false;
      setTimeout(function () {
        $scope.success_message = false;
        $scope.$apply()
      }, 3000);
    }
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
    $scope.getTotalquantity = function() {
      var total = 0;
      for (var i = 0; i < $scope.order.length; i++) {
        var product = $scope.order[i];
        total += (product.quantity);
      }
      return total;
    }
  }

  $scope.delete = (a) => {
    console.log(a);
    if (!a && a !=0){
      $scope.order = new Array();
    }
    else {
      $scope.order.splice(a, 1);
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
    setTimeout(function() {
      $scope.success = false;
      $scope.order = new Array();
      $scope.data.mobile = '';
      $scope.data.name = '';
      $scope.$apply();
    }, 3000);
    console.log($scope.order , $scope.data.mobile , $scope.data.name);
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      order: $scope.order,
      phone: $scope.data.mobile,
      name: $scope.data.name
    });
  }

  messagesRef.on('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
      var childData = childSnapshot.val();
      // console.log(childData);
    });
  });
});
