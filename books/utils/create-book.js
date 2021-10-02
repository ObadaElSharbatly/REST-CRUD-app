import { duplicatedName } from "./duplicated.js";
import fs from "fs";
import uniqueRandom from 'unique-random';

const random = uniqueRandom(1000, 9999);


export const creatBook = (req, res) => {

    const newBook = {
        name: req.body.name,
        author: req.body.author || "unknown",
        barcode: req.body.barcode || `${random()}-${random()}`,
        store: req.body.store || "unknown",
        read: req.body.read || "unknown"
    }

    if (!req.body.name || !req.body.read) {

        res.status(400).json({err: "make sure that body has at least 'name' and 'read' properties"});
        return;

    } else if (duplicatedName(newBook.name)) {
        
        res.status(400).json({err: "you already have this book in your library"});

    } else {
        addBookObject(newBook);

        res.json({
            newBook,
            done:"your book has been created successfully",
        })
    }
}

function addBookObject (newBook) {
    let books;
    fs.readFile('./book-list.js','utf8', function (err, data) {
        if (err) throw err;
        books = data;

        const newBookObject = books.replace(']', '') + JSON.stringify(newBook) + ',\n]';

        fs.writeFile('./book-list.js', newBookObject, function (err) {
            if (err) throw err;
            console.log('Done!');
        }); 
    });
}