import { allBooks } from "../book-list.js"
import { bookFound, findBook } from "./books-checking.js";

export const getAllBooks = (req, res) => {
    const bookName = req.params.bookName;
    
    if (!bookName) {
        res.json({allBooks})
        
    } else if (!bookFound(bookName)) {
        (allBooks.some(book => book["book name"].includes(bookName))) ? 
    res.json(allBooks.filter(book => book["book name"].includes(bookName))) :
    res.status(400).json({err: `(${bookName}) book is not in your library`});
    } 
    
    else {
        res.json(findBook(bookName));
    }
}