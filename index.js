// Write your code in this file!
function scuberGreetingForFeet(someValue) {
  //this is where we can use conditionals given our argument, someValue
  //don't forget to return whatever the result is!
  let returnValue;
  if (someValue <= 400) {
    returnValue = "This one is on me!";
  }
  else if (someValue > 2000 && someValue <= 2500) {
    returnValue = "I will gladly take your thirty bucks.";
  }
  else if (someValue >2500) {
    returnValue = "No can do.";
  }
  return returnValue;

}

function ternaryCheckCity(someValue) {
  let returnValue;
  if (someValue == "NYC") {
    returnValue = "Ok, sounds good."
  }
  return returnValue;
}
