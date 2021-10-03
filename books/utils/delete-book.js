import { allBooks } from "../book-list.js";
import { bookFound, indexOfBook } from "./books-checking.js";

export const deleteBook = (req, res)=>{
    const bookName = req.params.bookName;
    // if the user didn't put a name of the book in url
    if (!bookName) {
        res.status(400).json({err: `you didn't choose the book to delete -- make sure to put the right book name in the url`});

    }
    //if the book in the url is not in the library
    else if (!bookFound(bookName)) {
        res.status(400).json({err: `Sorry you don't have (${bookName}) book in your library to delete -- make sure to put the right book name in the url`});
    }
    //if the request is correct
    else {
        allBooks.splice(indexOfBook(bookName), 1)        
        res.json({success: "Your book has been deleted successfully"});
    }
}