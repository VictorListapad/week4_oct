// javascript 
// - is synchronous
// - is interpreted
// - asynchronous behavior
// - javascript is single threaded

// asynchronous example
setTimeout(() => {
  console.log("Water boiling done")
}, 4000)

console.log("Grinding coffee")

console.log("Hi")

let items = [4,7,6,28,16]; // 61

function getTipTotal(percentage, total) {
  return percentage * total;
}

function divideByPartyOf10(amount) {
  return amount / 10;
}

function getTotal(callback) {
  let total = items.reduce((acc, item) =>{ 
    return acc + item;
  }, 0); 
  console.log(callback(total));
  return total;
}

getTotal(divideByPartyOf10);



