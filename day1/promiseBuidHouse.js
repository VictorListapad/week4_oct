// steps to build a house
// - planning
// - structure
// - adding cement to structure
// - adding finishes

let planningDone = false;
let structureDone = false;
let cementAdded = false;
let finishesDone = false;

const planning = () => {
  planningDone = true; // comment this to see how .catch works
  return new Promise((resolve, reject) => {
    if (!planningDone) {
      reject("Planning is not done")
    } else {
      console.log("Planning Done")
      resolve();
    }
  })
}

const structure = () => {
  structureDone = true;
  return new Promise((resolve, reject) => {
    if (!structureDone) {
      reject("Structure not done")
    } else {
      console.log("Structure done")
      resolve();
    }
  })
}

const cement = () => {
  cementAdded = true;
  return new Promise((resolve, reject) => {
    if (!cementAdded) {
      reject("Cement Not added yet")
    } else {
      console.log("Cement added")
      resolve();
    }
  })
}

const finishes = () => {
  finishesDone = true;
  return new Promise((resolve, reject) => {
    if (!finishesDone) {
      reject("FInishes not done")
    } else {
      console.log("Finsihes done")
      resolve();
    }
  })
}

planning()
  .then(() => structure())
  .then(() => cement())
  .then(() => finishes())
  .catch((error) => console.log(error))
  .finally(() => {
    console.log("Finished buidling the house")
  })

