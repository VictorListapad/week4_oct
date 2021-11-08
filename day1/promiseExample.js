// making coffee using promises;

function boilWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Water boiling DONE");
    }, 5000);
  });
}

const grindCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Grinding coffee DONE");
    }, 1000)
  });
}

const brewCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Brewing coffee done')
    }, 500);
  })
}

// boil water - step 1;
boilWater()
  .then(response => {
    console.log(response);

    // step 3 - brew coffee
    brewCoffee()
      .then(response => console.log(response));
  });

// grind coffee = step 2
grindCoffee()
  .then(response => {
    console.log(response)
  });

