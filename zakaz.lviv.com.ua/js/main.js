$(document).ready(()=>{
  var firebaseConfig = {
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
   firebase.initializeApp(firebaseConfig);
   firebase.analytics();
})
