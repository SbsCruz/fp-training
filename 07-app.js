// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(arr, bookName) {
  let newA = [...arr]

  newA.push(bookName);
  return newA;
  
  // Change code above this line
}

// Change code below this line
function remove(arr, bookName) {
  let newB = [...arr]
  const book_index = newB.indexOf(bookName);
  if (book_index >= 0) {

    newB.splice(book_index, 1);
    return newB;

    // Change code above this line
    }
}