const createPizzaDough = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("created the dough");
      resolve();
    }, 3000)
  })
}

const addIngredients = () => {
  let addedIngredients = true; // comment this out to test try catch
  return new Promise((resolve, reject) => {
    if (addedIngredients) {
      setTimeout(() => {
        console.log("Added Tomattoe Sauce, mozzarella, Pinapples and Pepperoni");
        resolve();
      }, 2000)
    } else {
      reject("Couldn't add ingredients")
    }
  })
}

const bakeThePizza = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Finished baking the pizza");
      resolve("Finished baking the pizza");
    }, 3000)
  })
}

async function makePizza() {
  createPizzaDough()
    .then(() => addIngredients())
    .then(() => bakeThePizza())
    .then(() => console.log("Pizza is ready"))
    .catch((err) => console.log("Error", err));
}

const makePizzaAsync = async () => {

  try {
    await createPizzaDough();
    await addIngredients();
    const baked = await bakeThePizza();
    console.log("meanwhile it bakes")
    console.log(baked);
    console.log("Pizza is ready");
  } catch (error) {
    console.log(error);
  }
}

makePizzaAsync();