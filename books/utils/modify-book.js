import { allBooks } from "../book-list.js";
import { bookFound, indexOfBook } from "./books-checking.js";

export const modifyBook = (req, res) => {
    const bookName = req.params.bookName;
    const modifiedName = req.body.name;
    // if the user didn't put a name of the book in url
    if (!bookName) {
        res.status(400).json({err: `you didn't choose the book to modify -- make sure to put the right book name in the url`});

    }
    //if the book in the url is not in the library
    else if (!bookFound(bookName)) {
        res.status(400).json({err: `Sorry you don't have (${bookName}) book in your library -- make sure to put the right book name in the url`});

    }
    //if the body of request is empty
    else if (Object.keys(req.body).length === 0) {
        res.status(400).json({err: "you should put your modifications in body of your request"});

    }
    //if the user wants to put another name that is already used
    else if (bookFound(modifiedName)) {
        res.status(400).json({err: `You already have (${modifiedName}) book in your library please choose another name if you want to modify the name or remove the {name} property from the body`});
        
    }
    //if the request is correct
    else {
        const theBook = allBooks[indexOfBook(bookName)];
        const modifications = req.body;
        for (const key in theBook) {
            if (modifications.hasOwnProperty(key)) {
                theBook[key] = modifications[key]    
            }
        }
        res.json({"Book after modifications": theBook, success: "Your book has been modified successfully"});
    }
}