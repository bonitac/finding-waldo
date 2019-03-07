// function findWaldo(arr, found) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

var names = ["Alice", "Bob", "Waldo", "Winston"];
names.forEach(function(name,index){
  if (name === "Waldo"){
    console.log("Found him at index " + index + "!");
  }
})


// findWaldo(, actionWhenFound);