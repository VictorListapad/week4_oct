const createPizzaDough = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("created the dough");
      resolve();
    }, 3000)
  })
}

const addIngredients = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Added Tomattoe Sauce, mozzarella, Pinapples and Pepperoni");
      resolve();
    }, 2000)
  })
}

const bakeThePizza = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Finished baking the pizza");
      resolve();
    }, 1000)
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
    await bakeThePizza();
    console.log("Pizza is ready");
  } catch (error) {
    console.log(error);
  }
}

makePizzaAsync();
