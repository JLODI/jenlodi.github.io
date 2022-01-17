

var snugglesLocation = Math.floor(Math.random() * 9)
var raccoonLocation = Math.floor(Math.random() * 9)
var clicks = 0

if(snugglesLocation===raccoonLocation){
  var snugglesLocation = Math.floor(Math.random() * 9)
}

console.log(snugglesLocation)
console.log(raccoonLocation)

const catGame = (location) => {
 if(location===snugglesLocation){
    document.getElementById(location).innerHTML= "&#x1f308"
    document.getElementById("winLose").innerHTML= "You found Snuggles!"
 }
 else if (location===raccoonLocation){
   document.getElementById(location).innerHTML= "&#x2620"
 }
 else {
   document.getElementById(location).innerHTML= "&#x1f332"
 }
   clicks = clicks + 1
}
