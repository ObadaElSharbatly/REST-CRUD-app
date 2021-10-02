import { allBooks } from "../book-list.js"

export const duplicatedName = (propertyValue) => allBooks.some((element) => element.name === propertyValue);
