import { allBooks } from "../book-list.js"

export const bookFound = bookName => allBooks.some((element) => element["book name"] === bookName); 
export const findBook = bookName => allBooks.find(book => book["book name"] === bookName);
export const indexOfBook = bookName => allBooks.indexOf(allBooks.find(book => book["book name"] === bookName));