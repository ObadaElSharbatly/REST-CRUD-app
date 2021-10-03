import express from "express";
import { creatBook } from "../utils/create-book.js";
import { deleteBook } from "../utils/delete-book.js";
import { getAllBooks } from "../utils/get-books.js";
import { modifyBook } from "../utils/modify-book.js";

export const router = express.Router();

// get all books
router.get('/', getAllBooks )
router.get('/:bookName', getAllBooks )

// add a book
router.post('/add-book', creatBook )

// modify a book
router.put('/modify-book/', modifyBook )
router.put('/modify-book/:bookName', modifyBook )

// delete a book
router.delete('/delete-book', deleteBook )
router.delete('/delete-book/:bookName', deleteBook )

