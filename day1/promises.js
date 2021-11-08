let debtorHasPaid = false;

// const loan = new Promise((resolve, reject) => {
//   if (debtorHasPaid === false) {
//     reject("Debtor has not paid")
//   } else {
//     resolve("Debtor has paid")
//   }
// });

// loan
//   .then(dog => console.log(dog) )
//   .catch(error => console.log(error))

let checkItems = [
  {price: 13, name: 'Pizza'},
  {price: 17, name: 'Burger'},
  {price: 12, name: 'Tacos'}
]

const totalSum = new Promise((resolve, reject) => {
  // calculating total;
  let total = checkItems.reduce((acc, item) => {
    return acc + item.price;
  }, 0)
  // if success => resolve
  if (total > 0) {
    resolve(total);
  // else reject w/ error
  } else {
    reject("Couldn't get sum");
  }
});

totalSum
  .then(total => {
    console.log("Total with tip included", total + (total * 0.1));
  })
  .catch((err) => console.log(err));