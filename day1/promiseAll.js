/**
 * - send package
 * - get to Ironhack to Teach
 * - Resume Class
 * - Sleep
 */

let sendingPackage = new Promise((resolve, reject) => {
  let finsihedTask = true;
  if (!finsihedTask) {
    reject("Package has not been sent");
  } else {
    console.log("Package sent")
    resolve()
  }
})

let arrivetToIronhack = new Promise((duck, poop) => {
  let arrived = true;
  if (arrived) {
    console.log("I arrived!");
    duck();
  } else {
    poop("I got run over by the garbage truck")
  }
})

let finishedClass = new Promise((resolve, reject) => {
  let time = '6:00pm'
  if (time !== '6:00pm') {
    reject("Haven't finished class")
  } else {
    console.log("Finished class")
    resolve();
  }
})

// let peopleInBuildingCo = [
//   {name: 'Kalju', type: 'student'},
//   {name: 'Pablo', type: 'student'},
//   {name: 'Arturo', type: 'staff'},
//   {name: 'Sylvia', type: 'student'},
// ]

// for(let person of peopleInBuildingCo) {
//   if (person.type !== 'staff') {
//     console.log("Not staff go to next person")
//   } else {
//     person.name = person.name.toLowerCase();
//     console.log(person.name);
//   }
// }

let promises = [sendingPackage, arrivetToIronhack, finishedClass]
Promise.all(promises)
  .then(() => console.log("Finished the day"));

const add = (a,b) => {
  return new Promise((resolve, reject) => {
    let sum = a + b
    if (sum) {
      resolve(sum)
    } else {
      reject("Couldn't get sum")
    }
  })
};

// add(5,3).then((result) => console.log("Sum is ", result));