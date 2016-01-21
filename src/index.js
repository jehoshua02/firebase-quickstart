var Firebase = require('firebase');
var FirebaseRef = new Firebase('https://jehoshua02-qs.firebaseio.com/');

FirebaseRef.set({
  title: "Hello World!",
  author: "Firebase",
  location: {
    city: "San Francisco",
    state: "California",
    zip: 94103
  }
});

FirebaseRef.child("location/city").on("value", function(snapshot) {
  alert(snapshot.val());  // Alerts "San Francisco"
});
