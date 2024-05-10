function person(name, age){
    this.name = name;
    this.age = age;
    this.great = function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
};
const adam = new person('Adam',30);
console.log({adam});

const eve = new person('Eve',20);
console.log({eve});
eve.children = ['Abel','Cain','Seth'];
console.log({eve});
console.log({adam});

person.prototype.nationality = 'Kenyan';
console.log('adam-nationality', adam.nationality);

eve.nationality = 'Ugandan';
console.log({eve});
console.log('eve-nationality', eve.nationality);
console.log('adam-nationality-second',adam.nationality);
//You can implement the requested functionality with the following JavaScript code:
// ```javascript
// const books = [
//   { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951, isAvailable: true },
//   { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861, isAvailable: false },
//   { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear: 1866, isAvailable: true },
//   { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925, isAvailable: false },
//   { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
// ];
const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951, isAvailable: true },
    { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861, isAvailable: false },
    { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear: 1866, isAvailable: true },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925, isAvailable: false },
    { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
  ];
// Write a JavaScript program that performs the following tasks:
// Create a function called getAvailableBooks that returns an array of all available books.
function getAvailableBooks(){
console.log(books.filter(book=>book.isAvailable))
return books.filter(book=>book.isAvailable)
}
getAvailableBooks()
function getBooksByAuthor(authorName) {
  console.log(books.filter(book => book.author === authorName))
  return books.filter(book => book.author === authorName);
}
function addNewBook(book) {
  if (!book.title || !book.author || !book.publicationYear || book.isAvailable === undefined) {
    console.log("Error: The book object must contain title, author, publicationYear, and isAvailable properties.");
    return ("Error: The book object must contain title, author, publicationYear, and isAvailable properties.");;
  }
  books.push(book);
}
addNewBook({title:"Racheal", author:" Racheal", publicationYear:3765643, isAvailable:true})
console.log(books)
function checkoutBook(title) {
  const book = books.find(book => book.title === title);
  if (book) {
    if (book.isAvailable) {
      book.isAvailable = false;
      console.log(`${title} has been checked out.`);
    } else {
      console.log(`${title} is not available for checkout.`);
    }
  } else {
    console.log(`${title} is not found in the library.`);
  }
}
function returnBook(title) {
  const book = books.find(book => book.title === title);
  if (book) {
    if (!book.isAvailable) {
      book.isAvailable = true;
      console.log(`${title} has been returned.`);
    } else {
      console.log(`${title} does not belong to the library.`);
    }
  } else {
    console.log(`${title} is not found in the library.`);
  }
}
function removeWhiteSpace(text){
  const string = '      Hello World       ';

const result = string.split(' ').join('');

console.log(result);
}
function removeWhitespaces(string, i = 0, res = "") {
  if (i >= string.length)
    return res
  else
  if (string[i] == " ")
    return removeWhitespaces(string, i + 1, res)
  else
    return removeWhitespaces(string, i + 1, res += string[i])
}

console.log(removeWhitespaces(" Hello World,   how is it going ? "))


array = [1, 2, 3, 4, 5]
array.reverse()
print(array) 
Output

[5, 4, 3, 2, 1]

array = [1, 2, 3, 4, 5]
reversed_array = []
for i in range(len(array) - 1, -1, -1):
    reversed_array.append(array[i])
print(reversed_array)  




