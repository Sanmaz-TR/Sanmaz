// IIFE
(function() {
    console.log("I'm an IIFE");
}) ();

  var empID = (function() {
      let count = 0;
      return function() {
          count++;
          return `EmpID${count}`;
      } 
     }
   ) ();
   console.log(empID() + " is " + "Alex");
   console.log(empID() + " is " + "Felix");
   console.log(empID() + " is " + "Mary");

   (function chkIIFE(text, times) {
    for(var i = 1; i <= times; i++){
        console.log(text);
    }
}("Hello", 4));

// Callbacks
  function watch(movies) {
      console.log(`I have watched ${movies}`)
  }
  var films = ["Inception","Dark Knight", "Interstellar"];
  for (var i = 0; i < films.length; i++) {
      watch(films[i]);
  }
  function travel(places) {
      console.log(`I've been to ${places}`)
  }
  var countries = ["Spain", "United Kingdom", "Canada"];
  for (var i = 0; i < countries.length; i++) {
      travel(countries[i]);
  } 

//   Closures
  for (var i = 0; i < 2; i++) {
      setTimeout(function(local) {
          return function() {
              console.log(local);
          }
      }(i), 5000+i)
  }

  function createBase(baseNumber) {
        return function(N) {
        return baseNumber + N;
    }
}  
  var addSix = createBase(6);
  console.log(addSix(10));
  console.log(addSix(21));

  
