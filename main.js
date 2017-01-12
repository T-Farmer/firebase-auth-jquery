firebase.initializeApp({
    apiKey: "AIzaSyBIWu3e0DxTZkGnXMVqQf-QzblSa665mhg",
    authDomain: "c17-jquery-auth-e8bee.firebaseapp.com",
    databaseURL: "https://c17-jquery-auth-e8bee.firebaseio.com",
    storageBucket: "c17-jquery-auth-e8bee.appspot.com",
    messagingSenderId: "225078276812"
  });


// setTimeout(() => console.log(firebase.auth().currentUser), 1000)

firebase.auth().onAuthStateChanged(() => {
    if (firebase.auth().currentUser) {
      //logged in
      var email = firebase.auth().currentUser.email

      $('.login-page').addClass('hidden')
      $('.main-page').removeClass('hidden')
      $('main-page h1').text('Welcome ${email}')
    } else {
      //logged out
      $('.login-page').removeClass('hidden')
      $('.main-page').addClass('hidden')
    }
})

$('form').submit((e) => {
  var email = $('input[type="email"]').val()
  var password = $('input[type="password"]').val()

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => $('form')[0].reset())

  e.preventDefault()

})  //set to the h1
