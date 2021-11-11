let mA = {
  name: "Marc Anthony",
  genre: "Salsa",
  birthPlace: "Puerto Rico",
};

const { birthPlace, genre, name } = mA;

// console.log(name);

// let juanLuis = {
//   name: "Juan Luis Guerra",
//   genre: "Merengue" ,
//   birthPlace: "D.R. Santo Domingo"
// }

// const {name: duck, genre: dog, birthPlace: cat} = juanLuis;

const cr7 = {
  team: "Manchester United",
  age: 37,
  ballonDore: 5,
};

const { team: duck, age: dog, ballonDore: cat } = cr7;

// console.log(cat);
// console.log(duck);

const foods = [
  "tacos",
  "sushi",
  "cheeseburger",
  "pizza",
  "spaghetti",
  "paella",
  "kibbeh",
  "empanadas",
  "ceviche",
];

const [firstDish, secondDish, , , , sixth, seventh] = foods;
const [, , , , , , , e] = foods; // very impractical

// console.log(firstDish);
// console.log(secondDish);

// console.log(sixth);
// console.log(seventh);
// console.log(e);

// console.log(...foods);

let altDishes = ["arepas", "encebollado", "menudo"];

let mergedFoods = [...foods, ...altDishes];

// console.log(mergedFoods);

function add() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

function add2(...values) {
  let sum = values.reduce((acc, value) => {
    return acc + value;
  }, 0);
  return sum;

  // similar to what reduce is doing
  // let total = 0;
  // let sumation = 0;
  // for (let i = 0; i< values.length; i++) {
  //   sumation += values[i]
  // }
  // total = sumation;
  // return total;

}

const add3 = (...values) => values.reduce((acc, value) => acc + value, 0);

// console.log(add());
// console.log(add2(1, 1, 2, 3, 5, 8, 13));
console.log(add3(1,2,3,4));
