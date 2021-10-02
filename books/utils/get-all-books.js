import { allBooks } from "../book-list.js"

export const getAllBooks = (req, res) => {
    res.json({allBooks})
}