import { allBooks } from "../book-list.js"

export const getAllBooks = (req, res) => {
    const bookName = req.params.name;
    const bookFound = allBooks.some(book => book.name === bookName);
    if (!bookName) {
        res.json({allBooks})
        
    } else if (!bookFound) {
        res.status(400).json({err: `(${bookName}) book is not in your library`})
    } 
    
    else {
        const findBook = allBooks.find(book => book.name === bookName);
        res.json(findBook);
    }
}