import { allBooks } from "../book-list.js"
import { duplicatedName } from "./duplicated.js";


export const creatBook = (req, res) => {

    const newBook = {
        name: req.body.name,
        author: req.body.author || "unknown",
        barcode: req.body.barcode || "unknown",
        store: req.body.store || "unknown",
        read: req.body.read || "unknown"
    }

    if (!req.body.name || !req.body.read) {

        res.status(400).json({err: "make sure that body has at least 'name' and 'read' properties"});
        return;

    } else if (duplicatedName(newBook.name)) {
        
        res.status(400).json({err: "you already have this book in your library"});

    } else {
        
        allBooks.push(newBook);

        res.json({
            newBook,
            done:"your book has been created successfully",
            allBooks
        })
    }
}