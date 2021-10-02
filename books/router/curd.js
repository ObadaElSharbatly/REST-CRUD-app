import express from "express";
import { creatBook } from "../utils/create-book.js";
import { getAllBooks } from "../utils/get-all-books.js";
import { modifyBook } from "../utils/modify-book.js";

export const router = express.Router();

// get all books
router.get('/', getAllBooks )

// add a book
router.post('/add-book', creatBook )

// modify a book
router.put('/add-book/:name', modifyBook )

// // delete a book
// router.post('/add-book', deleteBook )

