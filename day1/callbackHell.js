const directions = [
  "Starting point: Ironhack Miami",
  "↑ Head east on SW 8th St/Carlos Arboleya toward SW 1st Avenue",
  "➔ Turn right onto S Miami Ave",
  "* Chipotle Mexican Grill 891 S Miami Ave, Miami",
];

function printError(strError) {
  console.log(strError);
}

function getDirections(step, callback, duck) {
  // setTimeout(() => {
  console.log(directions[step]);
  if (!directions[step]) {
    duck("Instructions not found.");
  } else {
    callback();
  }
  // }, 2000);
}


// call back hell
// getDirections(8, () => {
//   getDirections(1, () => {
//     getDirections(2, () => {
//       getDirections(3, () => {
//         getDirections(4, () => {console.log("Looking for step 4")}, (chars) => {
//           console.log(chars);
//         })
//         // console.log("You have arrived!")
//       }, printError)
//     }, printError)
//   }, printError)
// }, printError)

function obtainDirections(step) {
  return new Promise (function (resolve, reject) {
    // setTimeout(() => {
      console.log( directions[step] );
      if (!directions[step]) {
        reject("Instructions not found.") 
      } else {
        resolve();
      } 
    // }, 2000); 
  })
};

// how to avoid callback hell and print directions in order
obtainDirections(0)
  .then(() => obtainDirections(1))
  .then(() => obtainDirections(12))
  .then(() => obtainDirections(3))
  .then(() => console.log("You are done!"))
  .catch((err) => console.log("ERROR: ", err));