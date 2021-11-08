let books = [
  {page: 700, region: 'Europe', title: 'Harry Potter Deadly Hollows'}, 
  {page: 600, region: 'Europe', title: 'LOTR Return Of The King'},
  {page: 350, region: 'Europe', title: 'Farenheight 451'},
  {page: 412, region: 'N.A', title: 'Dune'},
  {page: 471, region: 'Latin America', title: '100 años de Soledad'},
  {page: 320, region: 'N.A', title: 'Lost Apothecary'},
  {page: 200, region: 'Latin America', title: 'The Alchemist'}
]

for(let i = 0; i < books.length; i++) {
  // console.log(books[i]);
}

books.forEach((book) => {
  // console.log(book)
});

for(let book of books) {
  // console.log(book);
}

for (let index in books) {
  // console.log(books[index]);
}

// spread operator
books = [...books, {page: 500,title:'1984'}]
// console.log(books);

// array functions
// filter
let titles = books.map((item) => {
  return item.title;
});

// filter in
let europeanAuthors = books.filter((book) => {
 return book.region === 'Europe';
})

// filter out
let notNAAuthors = books.filter((book) => {
  return book.region !== 'N.A';
})

// console.log(notNAAuthors);

// reduce, get a sum, reduce data into a single value
// let numberOfPages = books.reduce((acc, book) => {
//   return acc + book.page ;
// }, 0)

// console.log(numberOfPages);

// filtering then reduce
let pagesInLatinAmerica = books.filter((book) => {
  return book.region === 'Latin America';
})
.reduce((acc, book) => {
  return acc + book.page;
}, 0);
// console.log(pagesInLatinAmerica);

// filtering then map
let titlesFromEurope = books.filter((book) => {
  return book.region === 'Europe';
}).map((book) => {
  return book.title;
})
// console.log(titlesFromEurope);

// pop, push, shift, unshift, splice
let foods = [
  'Pizza', 
  'Tacos', 
  'Burger',
  'Lasagna',
  'Empanadas',
  'Carimañolas',
  'Croquetas',
  'Ceviche'
]

foods.push('Fried Rice');
foods.push('Poke');
console.log(foods)
foods.pop();
console.log("After .pop()", foods)

foods.unshift("Ramen");
console.log("After .unshift()", foods);
foods.shift();
console.log("After .shift()\t", foods);

let index = foods.indexOf('Empanadas');
foods.splice(index, 1);

console.log("After .splice\n", foods);
foods.splice(foods.length, 0, 'Cachapa', 'Churrasco');

console.log("After splice add", foods);
